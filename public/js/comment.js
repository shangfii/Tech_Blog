// fetch function for adding a comment to a post
async function commentFormHandler(event) {
    event.preventDefault();
  
    const textAreaData = document.querySelector('#textarea1')
    
    const description = textAreaData.value.trim();
    const blog_id = textAreaData.getAttribute('data-id');
    
    // console.log(description);
    // console.log(blog_id);

    if (description) {
        const response = await fetch('/api/blogs/comment', {
          method: 'POST',
          body: JSON.stringify({
            blog_id,
            description
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);