const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();

    console.log(username, password);
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        console.log(err);
      }
    }
  };


  document
  .querySelector('#sign-up-button')
  .addEventListener('submit', signupFormHandler);