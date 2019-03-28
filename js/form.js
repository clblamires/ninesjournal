window.onload = () => {
    let contactForm = document.getElementById("contact_form");
    contactForm.onsubmit = event => {
        event.preventDefault();
        contactForm.setAttribute("action","https://formspree.io/clblamires@gmail.com");
        contactForm.submit();
    }
}