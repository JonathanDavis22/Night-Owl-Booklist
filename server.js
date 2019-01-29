const express = require("express");

const app = express();

const PORT = process.env.PORT || 3360;

// Serve static content from 'public' directory
app.use(express.static(__dirname + "/public"));

// // Parse application
// app.use(bodyParser.urlenconded({ extended: true}));

// // Parse application/JSON
// app.use(bodyParser.json());

// Set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes annd give the server access to them.
let routes = require("./controllers/booklist_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on : http://localhost: " + PORT);
});