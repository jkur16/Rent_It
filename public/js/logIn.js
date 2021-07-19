const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("Login works!");
  
    // Collect values from the login form
    const username = document.querySelector('.username-link').value.trim();
    const password = document.querySelector('.password-link').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the listing page
        document.location.replace('/signedin');
      } else {
        alert(response.statusText);
      }
    }
  };
  
 
  
  document
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);
  


