const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
  
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

// Edit Button
const container = document.getElementById('container');
const editButton = document.getElementById('editButton');

const createUpdateButton = () => {
  
  container.removeChild(editButton);

  const updateButton = document.createElement('button');
  updateButton.textContent = 'Update';
  updateButton.id = 'updateButton';

 
  const textField = document.createElement('input');
  textField.type = 'text';
  textField.id = 'updateTextField';

  
  container.appendChild(updateButton);
  container.appendChild(textField);

};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const updateData = document.getElementById('updateTextField').value.trim();

  if (updateData) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ updateData })
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update project');
      }
    }
  }
};


editButton
  .addEventListener('click', createUpdateButton);

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
  
document
.querySelector('.project-list')
.addEventListener('click', updateButtonHandler);
  
document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
  