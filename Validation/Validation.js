
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;  
    let isValid = true;

    if (username.trim() === '') {
      document.getElementById('usernameError').innerText = 'Username is required';
      isValid = false;
    } else {
      document.getElementById('usernameError').innerText = '';
    }
  
    if (email.trim() === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      isValid = false;
    } else {
      document.getElementById('emailError').innerText = '';
    }
  
    if (password.trim() === '') {
      document.getElementById('passwordError').innerText = 'Password is required';
      isValid = false;
    } else {
      document.getElementById('passwordError').innerText = '';
    }
    if (password.length < 6) {
      document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      document.getElementById('passwordError').innerText = '';
    }
  
    return isValid;
  }
  