document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const contactData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        console.log("Contact Form Data:", contactData);

        // Reset the form after submission
        contactForm.reset();

        alert("Message sent successfully!");
    });
});
