const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);
const { Server } = require("socket.io");
require("dotenv").config();

const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = 5000;

io.on("connection", (socket) => {
  socket.emit("clientConnected", socket.id);

  socket.on("calling", ({ userData, clientData }) => {
    console.log(userData, clientData);
    io.to(clientData.id).emit("callRequest", {
      from: userData,
    });
  });

  socket.on("callAccepted", ({ userData, clientData }) => {
    console.log(userData, clientData);
    io.to(clientData.id).emit("accepted", {
      from: userData,
    });
  });
  socket.on("wordMessage", ({ to: clientId, word, status }) => {
    console.log(clientId);
    io.to(clientId).emit("gotMessage", {
      word,
      status,
    });
  });

  socket.on("valid", ({ from, word, result }) => {
    io.local.emit("wordStatus", {
      word,
      status: result,
      from,
    });
  });

  /* socket.on("callSignal", ({ calledId, from, userName }) => {
    console.log(calledId);
    io.to(calledId).emit("callUser", { from, userName });
  });

  socket.on("answerCall", ({ to, from, clientName }) => {
    console.log(to);
    io.to(to).emit("callAccepted", { from, clientName });
  });

  socket.on("sendMessage", ({ message, from, to }) => {
    io.to(to).emit("getMessage", { message, from });
  }); */
});

server.listen(PORT, () => {
  console.log(`server is connected on ${PORT}`);
});
