document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let statusMsg = document.getElementById("formStatus");

    if (name === "" || email === "" || message === "") {
        statusMsg.style.color = "red";
        statusMsg.textContent = "❌ Please fill in all fields!";
    } else {
        statusMsg.style.color = "lightgreen";
        statusMsg.textContent = "✅ Message sent successfully!";
        
        localStorage.setItem("contactMessage", JSON.stringify({ name, email, message }));
    }
});

// Load the saved messages when refreshed
document.addEventListener("DOMContentLoaded", function() {
    let savedMessage = localStorage.getItem("contactMessage");
    if (savedMessage) {
        let data = JSON.parse(savedMessage);
        document.getElementById("formStatus").textContent = `Last Message: ${data.message}`;
    }
});
