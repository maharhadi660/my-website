 document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting and reloading the page
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && message) {
        alert("Thank you for your message, " + name + ". We'll get back to you soon.");
    } else {
        alert("Please fill in all fields.");
    }

    // Reset the form after submission
    document.getElementById("contact-form").reset();
});
