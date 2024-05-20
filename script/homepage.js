document.addEventListener("scroll", function() {
    const navbar = document.querySelector("#nav");
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "orange";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});