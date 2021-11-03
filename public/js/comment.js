const commentFormHandler = async (event) => {
    event.preventDefault();
  
    
    const body = document.querySelector('#comment-body').value.trim();
    const postId = document.querySelector('#comment-post-id').textContent;
   
    console.log(body, postId);
  
    if (body) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ body, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('#comment-form')
    .addEventListener('click', commentFormHandler);