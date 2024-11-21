import { barcelona, roma, paris, londres } from "./ciudades.js";

//Elementos del DOM
let enlaces = document.querySelectorAll("a"); //querySelectorAll nos tira nodos
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let preciosElemento = document.getElementById("precios");

console.log(enlaces);

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover 'active' de los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    //agregar 'active' al enlace actual
    this.classList.add('active')

    //obtener contenido del enlace al que se le hizo click
    let contenido = obtenerContenido(this.textContent)

    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    preciosElemento.innerHTML = contenido.precios
  });
});

//funcion para traer la info de ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}