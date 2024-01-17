const express = require("express");
const app = express();
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the path to the views folder
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
