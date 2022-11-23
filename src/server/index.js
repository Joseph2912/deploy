const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
  
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});

class servidor {

  constructor() {

      this.app  = express();
      this.port = process.env.PORT;

      // Http server
      this.server = http.createServer( this.app );
      
      // Configuraciones de sockets
      this.io = socketio( this.server, { /* configuraciones */ } );
  }

  middlewares() {
      // Desplegar el directorio público
      this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

      // CORS
      this.app.use( cors() );

  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
      new Sockets( this.io );
  }

  execute() {

      // Inicializar Middlewares
      this.middlewares();

      // Inicializar sockets
      this.configurarSockets();

      // Inicializar Server
      this.server.listen( this.port, () => {
          console.log('Server corriendo en puerto:', this.port );
      });
  }

}


module.exports = servidor;