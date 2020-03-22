var express = require("express");
var app = express();
var PORT = process.env.PORT || 2020;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/fitness_controller");
app.use(routes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});