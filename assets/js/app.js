const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Cambie $n, $b, $l por $name, $blog, $location para mayor claridad
// Cambia name a .name (selector e clase)
// Cambia #blog a .blog (selector e clase)

const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');


async function displayUser(username) { //Añadi async
    $name.textContent = 'cargando...';
    $blog.textContent = '';
    $location.textContent = '';// limpia los campos antes de cargar nuevos datos
  try { //Se inicializa un bloque try para manejar errores
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Convierte la respuesta a JSON
    const data = await response.json();

    //Mostrar los datos en la página
    console.log(data); // Muestra los datos en la consola
    $name.textContent = `${data.name}`; //Se cambiaron las comillas
    $blog.textContent = `${data.blog}`;
    $location.textContent = `${data.location}`;
  } catch (error) { // Manejo de errores
    handleError(err);
  }
}
  function handleError(err) {
  console.log('OH NO!'); // Muestra un mensaje de error en la consola
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}
displayUser('stolinski'); // Se elimino el catch para evitar ser redundante