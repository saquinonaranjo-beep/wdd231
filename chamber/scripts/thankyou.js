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