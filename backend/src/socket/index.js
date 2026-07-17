const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

const mockIO = {
  emit: () => {},
  to: () => mockIO,
  except: () => mockIO,
  in: () => mockIO,
};

const getIO = () => {
  if (!io) {
    if (process.env.NODE_ENV === "test") {
      return mockIO;
    }

    throw new Error("Socket.io has not been initialized.");
  }

  return io;
};

module.exports = {
  initializeSocket,
  getIO,
};