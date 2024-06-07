// script.js
// Purpose: Add interactivity to the About Me page

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded and ready');

    // Example: Adding a dynamic greeting message based on the time of day
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    let message;

    if (hours < 12) {
        message = 'Good Morning from Tampa Bay!';
    } else if (hours < 18) {
        message = 'Good Afternoon from Tampa Bay!';
    } else {
        message = 'Good Evening from Tampa Bay!';
    }

    greeting.textContent = message;
    greeting.style.textAlign = 'center';
    greeting.style.color = '#ff930e';
    greeting.style.fontSize = '1.3em';
    document.querySelector('.header').appendChild(greeting);
});