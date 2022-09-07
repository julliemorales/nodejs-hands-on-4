const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

const galleryRouter = require("./routes/gallery.routes");

dotEnv.config();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Home Page
app.get("/", (req, res) => {
  res.status(200).render("pages/index");
});

// About Page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

// Gallery Page
app.use("/gallery", galleryRouter);

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Database connection is working");
});

const PORT = 3050;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
