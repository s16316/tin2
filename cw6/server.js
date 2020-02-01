const express = require('express');
const server = express();
const port = 4000;

server.get("/", (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

server.get("/www", (req, res) => {
   res.sendFile(__dirname + '/www/index.html');
});

server.get("/hello", (req, res) => {
   res.send({ message: "Hello world" });
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});