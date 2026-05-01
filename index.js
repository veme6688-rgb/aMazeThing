// Interactive JavaScript Functionality for the Welcome Page

// Welcome message
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.innerText = 'Welcome to the aMazeThing!';

// Button interactions
const button = document.getElementById('action-button');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

// Dynamic content updates
const dynamicContent = document.getElementById('dynamic-content');
setInterval(() => {
    dynamicContent.innerText = `Current Date and Time: ${new Date().toUTCString()}`;
}, 1000);