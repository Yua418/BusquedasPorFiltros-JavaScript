"use strict";
// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
};
const resultado = document.querySelector("#resultado");
const max = new Date().getFullYear();
const min = max - 15;

// Espera a la carga de la pagina para manipular el DOM
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); // Muestra los automoviles al cargar
    llenarSelect(); // Llena las opciones de años
});

// Eventos
marca.addEventListener("change", (event) => {
    datosBusqueda.marca = event.target.value;
    filtrarAuto();
}); 
year.addEventListener("change", (event) => {
    datosBusqueda.year = event.target.value;
    filtrarAuto();
}); 
minimo.addEventListener("change", (event) => {
    datosBusqueda.minimo = event.target.value;
    filtrarAuto();
}); 
maximo.addEventListener("change", (event) => {
    datosBusqueda.maximo = event.target.value;
    filtrarAuto();
}); 
puertas.addEventListener("change", (event) => {
    datosBusqueda.puertas = event.target.value;
    filtrarAuto();
}); 
transmision.addEventListener("change", (event) => {
    datosBusqueda.transmision = event.target.value;
    filtrarAuto();
}); 
color.addEventListener("change", (event) => {
    datosBusqueda.color = event.target.value;
    filtrarAuto();
}); 

// Funciones
function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, precio, color, transmision } = auto;
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `
        ${marca} ${modelo} ${year} - ${color} - ${puertas} Puertas - ${transmision} - US$ ${precio}
        `;
        resultado.appendChild(autoHTML);
    });
};

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
};

function llenarSelect() {
    for(let i = max; i > min; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega cada año al select
    };
};

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( fitrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    };
};

function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    };
    return auto;
};

function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year);
    };
    return auto;
};

function fitrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= parseInt(datosBusqueda.minimo);
    };
    return auto;
};

function filtrarMaximo(auto) {
    if(datosBusqueda.maximo) {
        return auto.precio <= parseInt(datosBusqueda.maximo);
    };
    return auto;
};

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === parseInt(datosBusqueda.puertas);
    };
    return auto;
};

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    };
    return auto;
};

function filtrarColor(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    };
    return auto;
};

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement("DIV");
    noResultado.classList.add("alerta","error");
    noResultado.textContent = "No hay resultados";
    resultado.appendChild(noResultado);
};