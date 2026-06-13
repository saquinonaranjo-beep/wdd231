document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector(".navigation");
    const yearSpan = document.querySelector("#currentyear");
    const lastModifiedSpan = document.querySelector("#lastModified");

    // Only update footer elements if they actually exist on this page
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Only run the click listener if both the button and menu exist on this page
    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");

            if (navigation.classList.contains("open")) {
                menuButton.textContent = "✖";
            } else {
                menuButton.textContent = "☰";
            }
        });
    }
});