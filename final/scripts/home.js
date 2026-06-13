const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

const yearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();

lastModifiedSpan.textContent =
`Last Modified: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
navigation.classList.toggle("open");


menuButton.textContent =
    navigation.classList.contains("open")
        ? "✖"
        : "☰";


});
