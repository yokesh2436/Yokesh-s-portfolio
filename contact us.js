document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch form data
    const name = document.querySelector('#contactForm input[type="text"]').value;
    const email = document.querySelector('#contactForm input[type="email"]').value;
    const message = document.querySelector('#contactForm textarea').value;

    // You can perform additional validations or processing here

    // Display a confirmation message
    alert(`Thank you, ${name}! Your message has been sent.`);
});
