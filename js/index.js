// IMPORT PARA IMPORTAR FUNCIONES DESDE OTRO ARCHIVO
// ¡¡IMPORTANTE IMPORTAR AL PRINCIPIO DEL ARCHIVO!!
// ¡¡IMPORTANTE AÑADIR EXTENSION DEL ARCHIVO!!
import { hideLoading, showLoading } from "./loadingManager.js";
import { cargarPeliculasAsync } from "./dataManager.js";
import { displayPeliculas } from "./renderPelis.js";

async function mostrarPeliculas() {
  showLoading()
  await cargarPeliculasAsync()
  displayPeliculas()
  hideLoading()
}

mostrarPeliculas()