document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://khmer-shoping.onrender.com'; // Add your API base URL here

    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');

    registerForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        try {
            const response = await fetch(apiUrl + '/auth/register', { // Concatenate apiUrl with endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    });

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch(apiUrl + '/auth/login', { // Concatenate apiUrl with endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    });

    logoutButton.addEventListener('click', async function() {
        try {
            const response = await fetch(apiUrl + '/auth/logout', { // Concatenate apiUrl with endpoint
                method: 'POST'
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    });
});
