const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const { comments, project_id } = req.body;
    const userId = req.session.user_id;

    const commentData = await Comment.create({
      ...comments,
      user_id: userId,
      project_id,
    });
    
    res.status(200).json({ message: 'Comment created successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;