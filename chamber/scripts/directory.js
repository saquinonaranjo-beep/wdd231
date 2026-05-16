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
            <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            <img src="${member.image}" alt="${member.name}">
        `;
        container.appendChild(card);
});

}
getMembers();

