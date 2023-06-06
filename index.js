const express = require("express");
const server = express();

/*
* app de express -> 
* 1. ruta
* 2. callback
*   1. response
*   2. request
*/

server.get("/", (request, response) => {
  response.write("Estamos en HOME");
  response.end()
})

server.listen(8080, () => {
  console.log("Nuestro servidor esta prendido!!");
})

/***
 * 3 endpoints en la ruta /hola -> [POST, DELETE, PATCH]
 */