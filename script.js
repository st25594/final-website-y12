const slider = document.getElementById("slider");

if (slider) {
    const images = ["food1.jpg", "food2.jpg", "food3.jpg"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        slider.src = images[index];
    }, 3000);
    const form = document.getElementById("contactForm");

if (form) 
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const error = document.getElementById("error");

        error.textContent = "";

        if (name.length < 3) {
            error.textContent = "Name must be at least 3 characters.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email.";
            return;
        }

        if (message.length < 10) {
            error.textContent = "Message must be at least 10 characters.";
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    })

