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
  
  // const updateButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');

  //     const updateData = document.getElementById('updateTextField').value.trim();

  //   if (updateData) {
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ updateData })
  //     });

  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to update project');
  //       }
  //     }
  //   }
  // };

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
  
  // document.getElementById("myButton").addEventListener("click", function() {
  //   var inputField = document.getElementById("inputField");
  //   if(this.textContent === 'Edit') {
  //     this.textContent = 'Update';
  
  //     // Create a new input field and add it to the page
  //     var input = document.createElement("input");
  //     input.type = "text";
  //     input.id = "myInput";
  //     input.className = "updateTextField";
  //     inputField.appendChild(input);
  
  //     // Set the data-id attribute
  //     this.setAttribute("data-id", "{{project.id}}");
  //   } else {
  //     this.textContent = 'Edit';
  
  //     // Remove the input field from the page
  //     var input = document.getElementById("myInput");
  //     inputField.removeChild(input);
  
  //     // Remove the data-id attribute
  //     this.removeAttribute("data-id");
  //   }
  // });
  

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
  
// document
//   .querySelector('.project-update')
//   .addEventListener('click', updateButtonHandler);
  
document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
  