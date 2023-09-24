// Run web_sockets_server.js before running this file

const WebSocket = require("ws");

function createWebSocketConnection(url) {
  const socket = new WebSocket(url);

  return new Promise((resolve, reject) => {
    socket.onopen = () => resolve(socket);
    socket.onerror = (error) => reject(error);
  });
}

createWebSocketConnection("ws://localhost:8080")
  .then((socket) => {
    socket.onmessage = (event) => console.log("Received message:", event.data);

    // Send a message to the server
    socket.send("Hello, WebSocket!");
    console.log("Client sent a message");
  })
  .catch((error) => console.error("WebSocket connection failed:", error));
