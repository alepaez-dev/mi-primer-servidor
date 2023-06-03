const http = require("http");

// Declarando el servidor

/**
 * Endpoint ->
 * conformado por 2 cosas
 * method -> [GET, PATCH, etc...]
 * ruta -> /, /kodemia, /posts
 */
const server = http.createServer((request, response) => {
  // Leer la request
  const { url, method } = request;
  // 1.er endpoint
  if(method === "GET" && url === "/hola") {
    response.write("Estamos en endpoint de get en hola");
  }
  // 2do endpoint
  if(method === "GET" && url === "/adios") {
    response.write("Estamos en endpoint de get en adios");
  }
  // 3er endpoint
  if(method === "POST" && url === "/hola") {
    response.write("Estamos CREANDO algo en hola");
  }

  // Responder
  response.end()
})

// Prender nuestro servidor
server.listen(8080, () => {
  console.log("Nuestro servidor esta prendido!!!");
})

/**
 * Tarea 1: terminar todos los metodos con la ruta /hola y con la ruta /adios
 * 10 -> ifs
 * Tarea 2: optimizar los ifs con estructura de datos.
 */
