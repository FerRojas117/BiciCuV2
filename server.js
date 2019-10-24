const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
// se normaliza puerto, se convierte en un entero
const normalizePort = val => {
  var port = parseInt(val, 10);
  // si el valor de normalizar el puerto no es un número
  if(isNaN(port)) {
    return val;
  }

  if(port >= 0) {
    return port;
  }

  return false;
}
// algún error por permisos o por que el puerto está ocupado
const onError = error => {
  // si no está escuchando, quiere decir que hubo un error
  if(error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch(error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  console.log("Listening on " + bind);
};

const port  = normalizePort(process.env.PORT || "3001");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
