document.querySelector('.membership-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for registering!');
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});

/* JavaScript for Smooth Dropdown Interaction */
document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");
    
    dropdown.addEventListener("mouseenter", function () {
        dropdownContent.style.display = "block";
        setTimeout(() => {
            dropdownContent.style.opacity = "1";
            dropdownContent.style.transform = "translateY(0)";
        }, 50);
    });
    
    dropdown.addEventListener("mouseleave", function () {
        dropdownContent.style.opacity = "0";
        dropdownContent.style.transform = "translateY(-10px)";
        setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 300);
    });
});

// navbar
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
