const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");
const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

const container = document.querySelector("#members-container");
const url = "data/members.json";

async function getMembers() {

    const response = await fetch(url);
    const data = await response.json();

    data.forEach((member) => {

        console.log(member.name);

        const card = document.createElement("div");

        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>

            <p>
                <a href="${member.website}" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Visit Website
                </a>
            </p>

            <img src="${member.image}" alt="${member.name}">
        `;

        container.appendChild(card);

    });
}

getMembers();

gridButton.addEventListener("click", () => {
    console.log("Grid clicked");
    container.classList.remove("list-view");
    container.classList.add("grid-view");
});

listButton.addEventListener("click", () => {
    console.log("List clicked");
    container.classList.remove("grid-view");
    container.classList.add("list-view");
});

year.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});