// Klocka, Öppettider och Datum

let tid = document.getElementById("tid");
let openClosed = document.getElementById("open-closed");
let datum = document.getElementById("datum")

function getTime () {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0")
    const minute = String(time.getMinutes()).padStart(2, "0")
    const second = String(time.getSeconds()).padStart(2, "0") 
    tid.textContent = `${hour}:${minute}:${second}` 
}

function isOpenedOrClosed () {
    const time = new Date();
    const dag = time.getDay();
    const hour = time.getHours();

    if (dag >= 1 && dag <= 5 && (hour >= 7 && hour < 18)) {
        openClosed.textContent = "Öppet"
        openClosed.style.color = "green"

    }
    else if(dag === 6 && (hour >= 9 && hour < 14)) {
        openClosed.textContent = "Öppet"
        openClosed.style.color = "green"
    }
    else {
     openClosed.textContent = "Stängd"
     openClosed.style.color = "red"
    }
}
function getDate () {
    const time = new Date();
    const year = time.getFullYear();
    const month = String(time.getMonth()).padStart(2, "0");
    const dateDay = String(time.getDate()).padStart(2, "0");
    
    const textDate = `${year}/${month}/${dateDay}`
    datum.textContent = textDate
}
setInterval(getDate, 1000);
setInterval(isOpenedOrClosed, 1000)
setInterval(getTime, 1000);

// BOKNINGEN
const formBook = document.getElementById("bokning-form");
const listContainer = document.getElementById("bokning-sparade")
const hundNamn = document.getElementById("bokat-namn")
const bokatDatum = document.getElementById("bokat-datum")

let bokningar = [];

function addLocalStorage() {
    const namn = hundNamn.value
    const datum = bokatDatum.value;

    const bokning = {
        namn: namn,
        datum: datum
    }

    bokningar.push(bokning)
    localStorage.setItem("bokningar", JSON.stringify(bokningar))

    loadLocalStorage();
    }

function loadLocalStorage() {
    const sparadeBokningar = localStorage.getItem("bokningar");

    if (sparadeBokningar) {
        bokningar = JSON.parse(sparadeBokningar)
    }

    listContainer.innerHTML = "";
   
    bokningar.forEach( (bokning) => {
        const li = document.createElement("li")
        li.textContent = bokning.namn + " - " + bokning.datum

        listContainer.appendChild(li)
    })
    
} 

document.addEventListener("DOMContentLoaded", (e) => {
    loadLocalStorage();
})

formBook.addEventListener("submit", (e) => {
e.preventDefault();
addLocalStorage();
console.log(bokatDatum.value)
})
const b = document.getElementById("btn")

b.addEventListener("click", () => {
    localStorage.clear()
})
// RECENSIONER
const recension = document.getElementById("recension-text")
const recensionNamn = document.getElementById("recension-person")
const recensionOmdome = document.getElementById("recension-rating")

// Dropdown Menu