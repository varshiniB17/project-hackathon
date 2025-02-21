async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}