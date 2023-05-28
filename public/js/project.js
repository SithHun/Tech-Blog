const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const text = document.querySelector('#comment-textarea').value.trim();
    const projectId = window.location.pathname.split('/').pop();
    console.log('Comment Text:', text);
    console.log('Project ID:', projectId);
    
    if (text && projectId) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ comments: text, project_id: projectId }),
          headers: {
            'Content-Type': 'application/json',
            },
         });
    
        if (response.ok) {
          const commentData = await response.json();
          console.log('Comment created:', commentData);
  
        } else {
          console.error('Failed to create comment:', response.status);
        }
      } catch (error) {
        console.error('Error creating comment:', error);
        }
    }
  };
  
  document
    .querySelector('#comment-submit')
    .addEventListener('click', newCommentHandler);