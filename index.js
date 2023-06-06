const express = require("express");
const server = express();
const fsPromises = require("fs/promises");

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

/**
 * arrow funtcions -> async () => {}
 * async function ()
 */
// Hacer un endpoint que lea un archivo y nos lo responda
server.get("/archivo", async (request, response) => {
  const data = await fsPromises.readFile("./archivoALeer.txt", "utf-8")
  response.send(data);
});

server.listen(8080, () => {
  console.log("Nuestro servidor esta prendido!!");
})

/***
 * 3 endpoints en la ruta /hola -> [POST, DELETE, PATCH]
 */