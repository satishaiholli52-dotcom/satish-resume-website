
console.log("Satish Aiholli's Resume Website is working!");

// Highlight the current page in the navigation
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    const linkURL = new URL(link.href);
    const currentURL = new URL(window.location.href);

    if (linkURL.pathname === currentURL.pathname) {
        link.setAttribute("aria-current", "page");
    }
});

// Handle the demonstration contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent =
            "Thank you, " + name +
            "! Your form was validated successfully. " +
            "This demonstration does not send or store messages.";

        contactForm.reset();
    });
}
