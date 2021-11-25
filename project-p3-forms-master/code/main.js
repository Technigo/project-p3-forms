const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", function () {
    document.documentElement.classList.toggle("mobile-menu-open");

    if (document.documentElement.className.includes("mobile-menu-open")) {
        hamburgerButton.setAttribute("aria-expanded", "true");
    } else {
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
});