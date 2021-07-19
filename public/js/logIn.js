const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("Login works!");
  
    // Collect values from the login form
    const username = document.querySelector('.username-link').value.trim();
    const password = document.querySelector('.password-link').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/signedin');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('.username-link').value.trim();
    const email = document.querySelector('.email-link').value.trim();
    const password = document.querySelector('.password-link').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
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
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('#signup')
  //   .addEventListener('submit', signupFormHandler);

