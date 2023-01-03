"use strict";
// Variables
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");


// Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(); // Muestra los automoviles al cargar
    llenarSelect(); // Llena las opciones de años

});


// Funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, precio, color, transmision } = auto;
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `
        ${marca} ${modelo} ${year} - ${color} - ${puertas} Puertas - ${transmision} - US$ ${precio}
        `;
        resultado.appendChild(autoHTML);
    });
};

function llenarSelect() {
    console.log("Llenando el select");
};