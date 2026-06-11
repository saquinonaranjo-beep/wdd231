import { routines } from '../data/routines.mjs';

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('routines-container');

    routines.forEach((routine, index) => {
        const card = document.createElement('div');
        card.className = `routine-card card-${index + 1}`;

        card.innerHTML = `
            <h2>${routine.name}</h2>

            <figure>
                <img src="${routine.image}"
                     alt="${routine.name}"
                     loading="lazy"
                     width="300"
                     height="200">
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

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn-more-btn')) {
            window.open(e.target.dataset.link, '_blank');
        }
    });


    const visitMessageElement = document.getElementById('visit-message');

    const lastVisit = localStorage.getItem('lastGymVisit');
    const now = Date.now();

    if (!lastVisit) {
        visitMessageElement.textContent =
            "Welcome to Nemesis Gym! Start exploring our workout routines.";
    } else {

        const timeDifference = now - parseInt(lastVisit);

        const daysDifference =
            Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < 1000 * 60 * 60 * 24) {
            visitMessageElement.textContent =
                "Back already? Time for another workout!";
        } else if (daysDifference === 1) {
            visitMessageElement.textContent =
                "Your last visit was 1 day ago.";
        } else {
            visitMessageElement.textContent =
                `Your last visit was ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem('lastGymVisit', now);

    document.getElementById('currentyear').textContent =
        new Date().getFullYear();

    document.getElementById('lastModified').textContent =
        `Last Modified: ${document.lastModified}`;
});