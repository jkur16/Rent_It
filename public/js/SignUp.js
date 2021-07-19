const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('.username-link').value.trim();
    const email = document.querySelector('.email-link').value.trim();
    const password = document.querySelector('.password-link').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/signedin');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#signup')
    .addEventListener('submit', signupFormHandler);