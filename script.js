// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.getElementById("backToTop");


// Show/hide button when scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// Scroll to top

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});