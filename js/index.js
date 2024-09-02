// IMPORT PARA IMPORTAR FUNCIONES DESDE OTRO ARCHIVO
// ¡¡IMPORTANTE IMPORTAR AL PRINCIPIO DEL ARCHIVO!!
// ¡¡IMPORTANTE AÑADIR EXTENSION DEL ARCHIVO!!
import { hideLoading, showLoading } from "./loadingManager.js";
import { cargarPeliculasAsync, getTotalPaginas } from "./dataManager.js";
import { displayPeliculas } from "./renderPelis.js";
import { toggleMenu } from "./menuManager.js";

document.getElementById('boton').addEventListener('click', toggleMenu)

// PAGINACION
let pagina = 1
const botonAnterior = document.getElementById('btnAnterior')
botonAnterior.style.display= 'none'
const botonSiguiente = document.getElementById('btnSiguiente')

botonSiguiente.addEventListener('click', () =>{
  if (pagina < getTotalPaginas()){
    pagina++
    mostrarPeliculas()
    botonAnterior.style.display= 'block'
  }
  if(pagina === getTotalPaginas()){
    botonSiguiente.style.display = 'none'
  }
})

botonAnterior.addEventListener('click', () =>{
  if(pagina > 1){
    pagina--
    mostrarPeliculas()
    botonSiguiente.style.display = 'block'
  }if(pagina === 1){
    botonAnterior.style.display = 'none'    
  }
})

// CARGAR TODAS LAS FUNCIONES
async function mostrarPeliculas() {
  showLoading()
  await cargarPeliculasAsync(pagina)
  displayPeliculas()
  hideLoading()
}

document.addEventListener('DOMContentLoaded', mostrarPeliculas)