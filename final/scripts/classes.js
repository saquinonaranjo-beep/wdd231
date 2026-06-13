import { routines } from '../data/routines.mjs';

document.addEventListener("DOMContentLoaded", () => {
  
    // === 1. NAVIGATION HAMBURGER TOGGLE (UPDATED WITH ICON AND "OPEN" CLASS) ===
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector(".navigation");
    
    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            // Toggles "open" to perfectly align with your updated CSS
            navigation.classList.toggle("open"); 

            // Swaps hamburger icon dynamically
            menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
        });
    }

    // === 2. DYNAMIC CONTENT GENERATION (classes.html) ===
    const container = document.getElementById('routines-container');
    if (container && routines) {
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
                <div class="routine-meta">
                    <p><strong>Muscle Group:</strong> ${routine.muscleGroup}</p>
                    <p><strong>Difficulty:</strong> ${routine.difficulty}</p>
                </div>
                <p class="routine-desc">${routine.description}</p>
                <button class="learn-more-btn" data-link="${routine.link}">
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
    }

    // === 3. LOCAL STORAGE VISIT COUNTER (classes.html) ===
    const visitMessageElement = document.getElementById('visit-message');
    if (visitMessageElement) {
        const lastVisit = localStorage.getItem('lastGymVisit');
        const now = Date.now();

        if (!lastVisit) {
            visitMessageElement.textContent = "Welcome to Nemesis Gym! Start exploring our workout routines.";
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

    // === 4. ACCESSIBLE MODALS (membership.html) ===
    const modalLinks = document.querySelectorAll("[data-modal]");
    modalLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const id = link.dataset.modal;
            const modal = document.querySelector(`#${id}`);
            if (modal) modal.showModal();
        });
    });

    const closeButtons = document.querySelectorAll(".close-modal");
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal)