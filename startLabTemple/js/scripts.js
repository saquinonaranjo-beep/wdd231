import { temples, url } from '../data/temples.js';

console.log(temples);
console.log(url);

/* Select elements */
const showHere = document.querySelector("#showHere");

const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mytitle");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector(".close-btn");

/* Close dialog */
myclose.addEventListener("click", () => {
    mydialog.close();
});

/* Display temple images */
function displayItems(data) {

    console.log(data);

    data.forEach(x => {

        console.log(x);

        /* Create image */
        const photo = document.createElement("img");

        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        photo.loading = "lazy";

        /* Open modal when clicked */
        photo.addEventListener("click", () => {
            showStuff(x);
        });

        /* Add image to page */
        showHere.appendChild(photo);
    });
}

/* Show modal content */
function showStuff(x) {

    mytitle.textContent = x.name;

    /* Optional information */
    myinfo.textContent = `Location: ${x.location}`;

    /* Open dialog */
    mydialog.showModal();
}

/* Run function */
displayItems(temples);