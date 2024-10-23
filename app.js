document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    form.reset();
    
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Message sent!';
    successMessage.style.color = 'lightgreen';
    form.appendChild(successMessage);
    
    setTimeout(() => successMessage.remove(), 5000);
});