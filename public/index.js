const signUpForm = document.querySelector('.signUpForm');

const User = class {
    constructor(username, email, password, role) {
        this.username = username,
        this.email = email,
        this.password = password,
        this.role = role
    }
    
    showInfo() {
        console.log(this.username, this.email, this.password, this.role)
    }
}

const handleForm = () => {

}

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;
    let role = 'admin';
    let user = { username, email, password };

    if (password != confirmPassword) {
        console.log('Passwords do not match');
        return;
    } else {
        let user = new User(username, email, password, role);
        e.target.reset();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        await fetch('http://localhost:8080/users/signup', options)
        .then(window.location = 'http://127.0.0.1:5500/public/login.html?')
    }
})