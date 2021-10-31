const commentFormHandler = async (event) => {
    event.preventDefault();
  
    
    const body = document.querySelector('#comment-body').value.trim();
   
  
    if (title && body) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ body }),
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