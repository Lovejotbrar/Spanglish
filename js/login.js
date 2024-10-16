window.addEventListener('DOMContentLoaded', function () {
   
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        displayUser(loggedInUser);
    } else {
       
        displayGuest();
    }

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

      
        const userFound = users.find(user => user.username === username && user.email === email && user.password === password);

        const messageElement = document.getElementById('login-message');
        if (userFound) {
            messageElement.textContent = 'Login successful!';
            messageElement.style.color = 'green';
            
           
            localStorage.setItem('loggedInUser', JSON.stringify(userFound));
            
            
            displayUser(userFound);

        } else {
            messageElement.textContent = 'Username or password is incorrect!';
            messageElement.style.color = 'red';
        }
    });
    
    
    function displayUser(user) {
        document.getElementById('user-name').innerHTML = user.username;
        document.getElementById('user-name2').innerHTML = user.username;

        const profilePicLetter = user.username[0].toUpperCase(); 
        document.getElementById('profile-pic').innerHTML = profilePicLetter;
        document.getElementById('profile-pic1').innerHTML = profilePicLetter;
    }


    function displayGuest() {
        document.getElementById('user-name').innerHTML = 'Guest';
        document.getElementById('user-name2').innerHTML = 'Guest';
        
        document.getElementById('profile-pic').innerHTML = 'G';
        document.getElementById('profile-pic1').innerHTML = 'G';
    }

    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        displayGuest();
    });
    
});
