const express = require("express");
const dotenv = require("dotenv");

const { chats } = require("./dummy-data");
const app = express();
dotenv.config();
// creating apis using express js

app.get("/", (request, response) => {
  response.send("API is running");
});

app.get("/chats", (request, response) => {
  response.send(chats);
});

app.get("/chat/:id", (request, response) => {
  response.send(chats.find((chat) => chat._id === request.params.id));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server has been started on port ${PORT}`));
