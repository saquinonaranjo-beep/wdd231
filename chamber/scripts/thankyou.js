const params = new URLSearchParams(window.location.search);

document.querySelector("#firstName").textContent =
    params.get("first");

document.querySelector("#lastName").textContent =
    params.get("last");

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#organization").textContent =
    params.get("organization");

document.querySelector("#timestampDisplay").textContent =
    params.get("timestamp");


const timestamp = document.querySelector("#timestamp");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");
if (timestamp) {
    timestamp.value = new Date().toISOString();
}


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});