document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    const messageElement = document.getElementById('register-message');

  
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        messageElement.style.color = 'red';
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        messageElement.textContent = 'Invalid email format!';
        messageElement.style.color = 'red';
        return;
    }

 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        messageElement.textContent = 'User with this username or email already exists!';
        messageElement.style.color = 'red';
    } else {
    
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users)
        messageElement.textContent = 'Registration successful, now you can login!';
        messageElement.style.color = 'green';
    }
});
