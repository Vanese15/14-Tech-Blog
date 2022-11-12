const express = require("express");
const session = require('express-session');
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.listen(PORT, () => {
     console.log("Server listening on port 3001");
  });