var express = require("express");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 2020;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/fitness_controller");
app.use(routes);


var URI = process.env.MONGODB_URI || "mongodb://user:nikola2020@ds151997.mlab.com:51997/heroku_rwh6btjv";

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});