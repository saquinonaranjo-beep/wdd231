const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}



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

        modal.close();

    });

});
