const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

var PORT = process.env.PORT || 3001;

//imports
const ROUTES = require("./src/routes/routes");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
//routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ROUTES);

//run
app.listen(PORT, () => {
  console.log(`Server running, Express is listening on port ${PORT}`);
});
