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
    const peliculas = getPeliculas()
    const pelicula = peliculas.find(p => p.id.toString() === idPelicula)
    const detallesHTML = `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${pelicula.title}</title>
            </head>
            <body>
                <div class="detalles-pelicula">
                    <h1>${pelicula.title}</h1>
                    <img src="${img}${pelicula.backdrop_path}" alt="${pelicula.title}">
                    <p>${pelicula.release_date}</p>
                </div>
            </body>
        </html>
    `

    const blob = new Blob ([detallesHTML], {type: 'text/html'})
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
}