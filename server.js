const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller");

app.use(routes);


app.listen(PORT, function() {
   console.log("Server listening on: http://localhost:" + PORT);
 });