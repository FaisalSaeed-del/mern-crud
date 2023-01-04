const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const notesController = require("./controllers/notesController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");

// Load env file
require("dotenv").config();

// mongodb connect

mongoose
  .connect("mongodb://127.0.0.1:27017/userAuth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(() => {
    console.log("Eroor");
  });

const app = express();
app.use(express.json());
app.use(cors());

// Routing
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

app.listen(process.env.PORT);
