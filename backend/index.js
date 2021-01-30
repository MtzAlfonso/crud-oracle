const express = require("express");
const morgan = require("morgan");
const app = express();

var PORT = process.env.PORT || 3001;

//imports
const ROUTES = require("./src/routes/routes");

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//routes
app.use(ROUTES);

//run
app.listen(PORT, () => {
  console.log(`Server running, Express is listening on port ${PORT}`);
});
