const post_id = document.querySelector('input[name="post-id"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#comment-body').value.trim();
  
    if (body) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ body, post_id }),
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