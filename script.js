document.addEventListener("DOMContentLoaded", function() {
    // Tombol Explore
    document.getElementById("exploreBtn").addEventListener("click", function() {
        window.scrollTo({
            top: document.getElementById("gallery").offsetTop,
            behavior: "smooth"
        });
    });

    // Tombol Learn More
    document.getElementById("learnMoreBtn").addEventListener("click", function() {
        alert("More about me coming soon!");
    });

    // Tombol Contact
    document.getElementById("contactBtn").addEventListener("click", function() {
        alert("Contact me at photographer@example.com");
    });
});
\document.addEventListener("DOMContentLoaded", function() {
    // Tombol 'Learn More' di About Section
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const aboutInfo = document.getElementById("aboutInfo");

    learnMoreBtn.addEventListener("click", function() {
        if (aboutInfo.classList.contains("hidden")) {
            aboutInfo.classList.remove("hidden");
            learnMoreBtn.textContent = "Show Less";
        } else {
            aboutInfo.classList.add("hidden");
            learnMoreBtn.textContent = "Learn More";
        }
    });

    // Form kontak dengan validasi
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });

    // Animasi tombol Service
    const serviceButtons = document.querySelectorAll(".service-btn");
    serviceButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("More details about this service coming soon!");
        });
    });
});
