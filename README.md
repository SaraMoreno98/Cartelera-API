Este proyecto es una aplicación web interactiva diseñada para que los usuarios puedan explorar películas en cartelera utilizando la API de The Movie Database (TMDb). La aplicación ofrece una experiencia de usuario fluida y atractiva, con funcionalidades de navegación, paginación, y visualización de detalles de películas.

Características
- Exploración de Películas: Los usuarios pueden ver una lista de películas actualmente en cartelera, con sus imágenes, títulos, y calificaciones.
- Paginación Dinámica: Navegación fácil entre diferentes páginas de películas con botones "Anterior" y "Siguiente" que se actualizan dinámicamente según el número de páginas disponibles.
- Detalles de Películas: Los usuarios pueden hacer clic en "Ver más" para abrir una página detallada de la película seleccionada.
- Carga de Contenidos: Indicador de carga visual mientras se obtienen los datos de la API para mejorar la experiencia de usuario.
- Menú Responsive: Un menú de navegación adaptable a diferentes tamaños de pantalla, asegurando accesibilidad desde dispositivos móviles.

Estructura del Proyecto
HTML
- Estructura Semántica: La página principal incluye un nav con enlaces para diferentes categorías de películas, una sección principal (main) para mostrar las películas, y una barra de paginación fija en la parte inferior.
- Loader: Un elemento div con un spinner animado que aparece mientras se cargan los datos.
- Integración de Fuentes y Estilos: Uso de la fuente Montserrat de Google Fonts y un archivo CSS personalizado para los estilos.

CSS (estilos.css)
- Estilos Responsivos: Adaptación del diseño para diferentes tamaños de pantalla con media queries, asegurando que la visualización sea óptima tanto en dispositivos móviles como en pantallas grandes.
- Temas de Colores: Variables CSS definidas para los colores principales, facilitando el mantenimiento y la personalización del tema visual.
- Diseño del Loader: Animación simple para indicar al usuario que el contenido está siendo cargado.

JavaScript
- index.js: Archivo principal que maneja la interacción del usuario, como la carga de películas, paginación, y la funcionalidad del menú.
- dataManager.js: Módulo encargado de las llamadas a la API de TMDb y gestión de datos como las películas y el número total de páginas.
- loadingManager.js: Controla la visibilidad del indicador de carga (loader).
- renderPelis.js: Renderiza las películas en la página principal y maneja la visualización de los detalles de cada película.
- menuManager.js: Módulo para el manejo de la visibilidad del menú en dispositivos móviles.

Instalación
1. Clona el repositorio en tu máquina local.
2. Configura tu clave de API en el archivo config.js.
3. Abre index.html en tu navegador para ver la aplicación en funcionamiento.

Uso
Al iniciar la aplicación, se mostrarán las películas en cartelera. Los usuarios pueden navegar entre las páginas de películas utilizando los botones "Anterior" y "Siguiente". Además, pueden acceder a más detalles de una película específica haciendo clic en "Ver más". El menú es adaptable y se reorganiza automáticamente en dispositivos móviles para mejorar la usabilidad.
