//button on top
let mybutton = document.getElementById("top");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

// Send form contact me to email
const btnSendeMessage = document.getElementById('btn-send'),
    contactForm = document.getElementById("contact-form");

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    btnSendeMessage.textContent = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_tinddha';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnSendeMessage.textContent = 'Send Message';
            Swal.fire({
                icon: "success",
                title: "Your message has been sent",
            });

            // clear input fields
            contactForm.reset();
        }, () => {
            btnSendeMessage.textContent = 'Send Message';
            // alert(JSON.stringify(err));
            Swal.fire({
                icon: "error",
                title: "Your message failed to send",
                text: "( service error )"
            });

            contactForm.reset();
        });
});