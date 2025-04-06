// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark');
    const body = document.body;
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark');
    });
  });
  