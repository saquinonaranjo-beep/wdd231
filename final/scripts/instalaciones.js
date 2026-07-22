import { routines } from '../data/routines.mjs';

document.addEventListener("DOMContentLoaded", () => {

    // === 1. ROUTINE GENERATION (Async with Try...Catch) ===
    const container = document.getElementById('routines-container');

    async function loadGymRoutines() {
        try {
            if (!container || !routines) {
                throw new Error("Required data or container element is missing.");
            }

            // Simulate API fetch delay
            await new Promise(resolve => setTimeout(resolve, 100));

            // Render all 15 cards using template literals
            routines.forEach((routine, index) => {
                const card = document.createElement('div');
                card.className = `routine-card card-${index + 1}`;

                card.innerHTML = `
                    <h2>${routine.name}</h2>

                    <figure>
                        <img src="${routine.image}"
                             alt="${routine.name}"
                             loading="lazy"
                             width="400" 
                             height="300">
                    </figure>

                    <p><strong>Muscle Group:</strong> ${routine.muscleGroup}</p>
                    <p><strong>Difficulty:</strong> ${routine.difficulty}</p>
                    <p>${routine.description}</p>

                    <button class="learn-more-btn"
                            data-link="${routine.link}">
                        View Routine
                    </button>
                `;

                container.appendChild(card);
            });

        } catch (error) {
            console.error("Error loading gym routines:", error);
            if (container) {
                container.innerHTML = `<p class="error-msg">Sorry, routines could not be loaded at this time.</p>`;
            }
        }
    }

    if (container) {
        loadGymRoutines();
    }

    // Button fallback handler
    if (container) {
        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('learn-more-btn')) {
                const targetLink = e.target.dataset.link;
                
                if (!targetLink || targetLink === "" || targetLink === "undefined" || targetLink === "#") {
                    alert("Routine details coming soon to Nemesis Gym Tepeyac!");
                } else {
                    window.open(targetLink, '_blank');
                }
            }
        });
    }


    // === 2. VISIT MESSAGE TRACKER (LocalStorage) ===
    const visitMessageElement = document.getElementById('visit-message');

    if (visitMessageElement) {
        const lastVisit = localStorage.getItem('lastGymVisit');
        const now = Date.now();

        if (!lastVisit) {
            visitMessageElement.textContent =
                "Welcome to Nemesis Gym! Start exploring our workout routines.";
        } else {
            const timeDifference = now - parseInt(lastVisit);
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (timeDifference < 1000 * 60 * 60 * 24) {
                visitMessageElement.textContent = "Back already? Time for another workout!";
            } else if (daysDifference === 1) {
                visitMessageElement.textContent = "Your last visit was 1 day ago.";
            } else {
                visitMessageElement.textContent = `Your last visit was ${daysDifference} days ago.`;
            }
        }

        localStorage.setItem('lastGymVisit', now);
    }


    // === 3. FOOTER AUTO-UPDATES ===
    const currentYearEl = document.getElementById('currentyear');
    const lastModifiedEl = document.getElementById('lastModified');

    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
});


// === 4. HAMBURGER MENU SYSTEM ===
const timestamp = document.querySelector("#timestamp");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
    });
}


// === 5. DIALOG MODALS ===
const modalLinks = document.querySelectorAll("[data-modal]");

modalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.dataset.modal;
        const modal = document.querySelector(`#${id}`);

        if (modal) {
            modal.showModal();
        }
    });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");
        if (modal) {
            modal.close();
        }
    });
});