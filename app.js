// Klocka, Öppettider och Datum

let tid = document.getElementById("tid");
let openClosed = document.getElementById("open-closed");
let datum = document.getElementById("datum")

function getTime () {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0")
    const minute = String(time.getMinutes()).padStart(2, "0")
    const second = String(time.getSeconds()).padStart(2, "0") 
    tid.textContent = `Tid: ${hour}:${minute}:${second}` 
}

function isOpenedOrClosed () {
    const time = new Date();
    const dag = time.getDay();
    const hour = time.getHours();

    if (dag >= 1 && dag <= 5 && (hour >= 7 && hour < 18)) {
        openClosed.textContent = " Öppet"
        openClosed.style.color = "green"

    }
    else if(dag === 6 && (hour >= 9 && hour < 14)) {
        openClosed.textContent = " Öppet"
        openClosed.style.color = "green"
    }
    else {
     openClosed.textContent = " Stängd"
     openClosed.style.color = "red"
    }
}
function getDate () {
    const time = new Date();
    const year = time.getFullYear();
    const month = String(time.getMonth()).padStart(2, "0");
    const dateDay = String(time.getDate()).padStart(2, "0");
    
    const textDate = `Datum: ${year}/${month}/${dateDay}`
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
    bokningar.forEach( (bokning, index) => {
        const li = document.createElement("li")
        const avBokaBtn = document.createElement("button")
        avBokaBtn.setAttribute("id", "avbokning-btn")
        li.setAttribute("class", "bokade-item")
        li.textContent = bokning.namn + " - " + bokning.datum
        avBokaBtn.textContent = "Avboka"
        
        avBokaBtn.addEventListener("click", () => {
            // Ta bort bokningen
            bokningar = bokningar.filter((b, i) => i !== index)
            
            localStorage.setItem("bokningar", JSON.stringify(bokningar))

                li.remove();
                avBokaBtn.remove();

            
        })
        listContainer.appendChild(li)
            li.appendChild(avBokaBtn)
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
// RECENSIONER
const recension = document.getElementById("recension-text")
const recensionNamn = document.getElementById("recension-person")
const recensionOmdome = document.getElementById("recension-rating")

// Dropdown Menu

// Recension fetcher
import { jsonRecensioner } from "./recensioner.js";

const omdomeBtn = document.getElementById("omdome-btn")
const recensionText = document.getElementById("recension-text")
const recensionPerson = document.getElementById("recension-person")
const recensionRating = document.getElementById("recension-rating")
const recensionStars = document.getElementById("recension-stars")
let i = 0;

omdomeBtn.addEventListener("click", () => {
    recensionText.style.fontStyle = "italic"
     recensionNamn.textContent = jsonRecensioner[i].namn;
     recensionText.textContent = jsonRecensioner[i].recensionen
     recensionRating.textContent = jsonRecensioner[i].rating
     recensionStars.textContent = jsonRecensioner[i].stars
     
    i++;

    if (i >= jsonRecensioner.length) {
        i = 0;
    }
})
