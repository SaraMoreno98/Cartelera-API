// IMPORT PARA IMPORTAR FUNCIONES DESDE OTRO ARCHIVO
// ¡¡IMPORTANTE IMPORTAR AL PRINCIPIO DEL ARCHIVO!!
// ¡¡IMPORTANTE AÑADIR EXTENSION DEL ARCHIVO!!
import { hideLoading, showLoading } from "./loadingManager.js";
import { cargarPeliculasAsync } from "./dataManager.js";
import { displayPeliculas } from "./renderPelis.js";
import { toggleMenu } from "./menuManager.js";

document.getElementById('boton').addEventListener('click', toggleMenu)

// PAGINACION
let pagina = 1

async function mostrarPeliculas() {
  showLoading()
  await cargarPeliculasAsync()
  displayPeliculas()
  hideLoading()
}

mostrarPeliculas()