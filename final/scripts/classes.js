import { routines } from '../data/routines.mjs';

document.addEventListener("DOMContentLoaded", () => {

    // === 1. GENERAR LAS TARJETAS (Con async y try catch para la tarea) ===
    const container = document.getElementById('routines-container');

    // Función asíncrona para cargar las rutinas
    async function loadGymRoutines() {
        try {
            // Revisar si el contenedor de las tarjetas y los datos existen
            if (!container || !routines) {
                throw new Error("No se encontraron los datos o el contenedor.");
            }

            // Una pausa chiquita para simular que carga de internet
            await new Promise(resolve => setTimeout(resolve, 100));

            // Recorrer el arreglo para ir armando cada tarjeta
            routines.forEach((routine, index) => {
                const card = document.createElement('div');
                card.className = `routine-card card-${index + 1}`;

                // Insertar los datos en el HTML usando las comillas invertidas
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
            // Si algo falla, el catch atrapa el error y pone un mensaje en la consola
            console.error("Error al mostrar las rutinas:", error);
            if (container) {
                container.innerHTML = `<p class="error-msg">Sorry, routines could not be loaded at this time.</p>`;
            }
        }
    }

    // Correr la función si el contenedor existe en la página
    if (container) {
        loadGymRoutines();
    }

    // Alerta por si le pican a un botón sin link completo
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


    // === 2. MENSAJE DE VISITAS CON LOCALSTORAGE ===
    const visitMessageElement = document.getElementById('visit-message');

    if (visitMessageElement) {
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
    }


    // === 3. FECHAS AUTOMÁTICAS EN EL FOOTER ===
    const currentYearEl = document.getElementById('currentyear');
    const lastModifiedEl = document.getElementById('lastModified');

    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
});


// === 4. MENÚ DE HAMBURGUESA PARA CELULARES ===
const timestamp = document.querySelector("#timestamp");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        // Cambiar el icono entre la x y las tres líneas
        menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
    });
}


// === 5. VENTANAS MODALES (Etiqueta Dialog) ===
const modalLinks = document.querySelectorAll("[data-modal]");

modalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.dataset.modal;
        const modal = document.querySelector(`#${id}`);

        if (modal) {
            modal.showModal(); // Abre el modal
        }
    });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest("dialog");
        if (modal) {
            modal.close(); // Cierra el modal
        }
    });
});