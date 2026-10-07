const typingText =
    document.getElementById("typingText");

if (typingText) {

    const roles = [
        "Troubleshooting",
        "Hardware, Software, Network",
        "Adobe Photoshop",
        "Web Developing"

    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentRole =
            roles[roleIndex];
        if (!deleting) {
            typingText.textContent =
                currentRole.substring(
                    0,
                    characterIndex + 1
                );
            characterIndex++;
            if (
                characterIndex ===
                currentRole.length
            ) {
                deleting = true;
                setTimeout(
                    typeEffect,
                    1000
                );
                return;
            }

        } else {

            typingText.textContent =
                currentRole.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;

            if (characterIndex === 0) {
                deleting = false;
                roleIndex++;
                if (
                    roleIndex >=
                    roles.length
                ) {
                    roleIndex = 0;
                }
            }
        }
        const speed =
            deleting ? 50 : 100;

        setTimeout(
            typeEffect,
            speed
        );
    }
    typeEffect();
}

const slides =
    document.querySelectorAll(".profile-slide");

const dots =
    document.querySelectorAll(".dot");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

if (
    slides.length > 0 &&
    dots.length > 0 &&
    prevBtn &&
    nextBtn
) {

    let currentSlide = 0;

    let carouselTimer;

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        }

        if (index < 0) {
            currentSlide =
                slides.length - 1;
        }

        slides.forEach(slide => {

            slide.classList.remove(
                "active"
            );

        });

        dots.forEach(dot => {
            dot.classList.remove(
                "active"
            );

        });

        slides[currentSlide]
            .classList.add("active");

        if (dots[currentSlide]) {

            dots[currentSlide]
                .classList.add("active");
        }
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
        resetCarousel();
    }

    function previousSlide() {
        currentSlide--;
        showSlide(currentSlide);
        resetCarousel();

    }

    nextBtn.addEventListener(
        "click",
        nextSlide
    );

    prevBtn.addEventListener(
        "click",
        previousSlide
    );

    dots.forEach((dot, index) => {
        dot.addEventListener(
            "click",
            () => {
                currentSlide = index;
                showSlide(currentSlide);
                resetCarousel();
            }
        );
    });

    function startCarousel() {
        carouselTimer =
            setInterval(() => {
                currentSlide++;
                showSlide(currentSlide);
            }, 4000);

    }

    function resetCarousel() {

        clearInterval(
            carouselTimer
        );

        startCarousel();

    }

    showSlide(currentSlide);
    startCarousel();

}

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {
        const elementTop =
            element.getBoundingClientRect().top;
        if (
            elementTop <
            windowHeight - 100
        ) {
            element.classList.add(
                "active"
            );
        }
    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}
