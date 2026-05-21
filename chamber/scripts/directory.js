const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

const container = document.querySelector("#members-container");

const url = "data/members.json";

async function getMembers() {
    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to load members");
        }

        const data = await response.json();

        data.forEach((member) => {

            const card = document.createElement("div");

            card.classList.add("member-card");

            card.innerHTML = `
                <h3>${member.name}</h3>

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <p>
                    <a
                        href="${member.website}"
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit Website
                    </a>
                </p>

                <img
                    src="${member.image}"
                    alt="${member.name}"
                    loading="lazy"
                    width="400"
                    height="250">
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error("Error loading members:", error);

    }
}

getMembers();

gridButton.addEventListener("click", () => {

    container.classList.remove("list-view");
    container.classList.add("grid-view");

});

listButton.addEventListener("click", () => {

    container.classList.remove("grid-view");
    container.classList.add("list-view");

});

year.textContent = new Date().getFullYear();

lastModified.textContent =
`Last Modified: ${document.lastModified}`;

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});