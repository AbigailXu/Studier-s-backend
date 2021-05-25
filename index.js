// dotenv
require('dotenv').config();

// Express.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// MongoDB
const db = require("./db");
const taskRouter = require('./routes/task-router')
const genreRouter = require('./routes/genre-router')




app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.get("/", (req, res) => {
  res.send("placeholder");
});

app.get("/read", (req, res) => {
  
})

app.use("/api/genre", genreRouter);
app.use("/api/task", taskRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
