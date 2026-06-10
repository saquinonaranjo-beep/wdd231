// src/scripts/discover.js
import { places } from '../data/places.mjs';

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('places-container');
    
    places.forEach((place, index) => {
        const card = document.createElement('div');
        card.className = `place-card card-${index + 1}`;
        
        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class="learn-more-btn" data-link="${place.link}">Learn More</button>
        `;
        container.appendChild(card);
    });


    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn-more-btn')) {
            window.open(e.target.dataset.link, '_blank');
        }
    });


    const visitMessageElement = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastChamberVisit');
    const now = Date.now();

    if (!lastVisit) {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = now - parseInt(lastVisit);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < 1000 * 60 * 60 * 24) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessageElement.textContent = "You last visited 1 day ago.";
        } else {
            visitMessageElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem('lastChamberVisit', now);

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});