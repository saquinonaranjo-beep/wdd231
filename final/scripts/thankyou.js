const params = new URLSearchParams(window.location.search);

document.querySelector("#firstName").textContent =
    params.get("first");

document.querySelector("#lastName").textContent =
    params.get("last");

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#fitnessGoal").textContent =
    params.get("fitnessGoal");

document.querySelector("#timestampDisplay").textContent =
    params.get("timestamp");


document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;



const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});