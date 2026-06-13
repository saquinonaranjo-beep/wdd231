const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

const yearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

// Defensive check to avoid crashing if elements don't exist on a sub-page
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        // CHANGED FROM "open" TO "show" TO MATCH THE CSS
        navigation.classList.toggle("show");

        menuButton.textContent =
            navigation.classList.contains("show")
                ? "✖"
                : "☰";
    });
}