const params = new URLSearchParams(window.location.search);

// Display form values
document.querySelector("#firstName").textContent =
    params.get("first") || "Not provided";

document.querySelector("#lastName").textContent =
    params.get("last") || "Not provided";

document.querySelector("#email").textContent =
    params.get("email") || "Not provided";

document.querySelector("#phone").textContent =
    params.get("phone") || "Not provided";

document.querySelector("#goal").textContent =
    params.get("goal") || "Not provided";

document.querySelector("#membership").textContent =
    params.get("membership") || "Not provided";

document.querySelector("#timestampDisplay").textContent =
    params.get("timestamp") || "Not provided";

// Footer
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});