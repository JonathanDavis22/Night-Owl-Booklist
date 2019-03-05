const express = require("express");

const app = express();

const PORT = process.env.PORT || 666;

// Serve static content from 'public' directory
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes annd give the server access to them.
let routes = require("./controllers/controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on : http://localhost: " + PORT);
});