// Initialize EmailJS with your API Key
emailjs.init("w7FkmAfkfcOgSblLP"); // Replace with your actual EmailJS API key

// Handle form submission
function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate input fields
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // console.log("Form data:", { name, email, subject, message }); // Debugging line,

  // Define the template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    to_name: "Rahul", // Modify this as needed
    message: message,
  };

  // Disable the submit button and show feedback
  const submitButton = document.getElementById("send-message-btn");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Send the email using EmailJS
  emailjs
    .send("service_cc2swpz", "template_jnqq52h", templateParams)
    .then(
      (response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
        resetForm();
      },
      (error) => {
        console.error("Error sending email:", error); // Log error for debugging
        alert("Failed to send email. Please try again later.");
      }
    )
    .finally(() => {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    });
}

// Reset form fields
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
  console.log("Form reset successfully.");
}

// Attach the sendEmail function to the button's click event
document
  .getElementById("send-message-btn")
  .addEventListener("click", sendEmail);
