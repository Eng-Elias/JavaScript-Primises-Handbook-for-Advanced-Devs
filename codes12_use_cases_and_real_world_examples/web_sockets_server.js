const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    ws.send("Server received: " + message);
  });
});

server.listen(8080, () => {
  console.log("WebSocket server is listening on port 8080");
});
