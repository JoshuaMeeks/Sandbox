const logInForm = document.querySelector('.logInForm')

logInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;
  let user = { username, password };

  if (!username || !password) {
      console.log('must fill out username and/or password');
  } else {
      e.target.reset();
      const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
      }
      await fetch('http://localhost:8080/users/login', options)
      .then(res => res.json())
      .then(data => localStorage.setItem('username', data))
      .then(() => window.location = 'http://127.0.0.1:5500/public/profile.html?')
  }
})