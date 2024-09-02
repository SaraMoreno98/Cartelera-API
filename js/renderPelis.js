import { getPeliculas } from "./dataManager.js";

const img = 'https://image.tmdb.org/t/p/w500'

export function displayPeliculas(){
    const peliculas = getPeliculas()
    let contenedor = ''

    if(peliculas && Array.isArray(peliculas)){
        peliculas.map(pelicula => {
            contenedor +=
            `
            <div class="pelicula">
                <img class="poster" src="${img}${pelicula.backdrop_path}"/>
                <h3>${pelicula.title}</h3>
                <div class="pelicula-texto">
                    <p class="voteAverage">🌟${pelicula.vote_average.toFixed(2)}</p>
                    <button>
                        <a data-id="${pelicula.id}" class="verMas">Ver más</a>
                    </button>
                </div>
            </div>
            `
        })
    }else{
        contenedor = `<p>No hay peliculas disponibles</p>`
    }
    
    document.getElementById('principal').innerHTML = contenedor

    // AGREGAR EVENT LISTENER A LOS ENLACES
    const verMasLinks = document.querySelectorAll('.verMas')
    verMasLinks.forEach(link => {
        link.addEventListener('click', mostrarDetallesPelicula)
    })
}

function mostrarDetallesPelicula(){
    const idPelicula = event.target.getAttribute('data-id')
    alert(idPelicula)
}