// fetch function for adding a new post
const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#postContent').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/blogs/`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.addPost-form')
    .addEventListener('submit', newPostHandler);