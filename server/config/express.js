const express = require("express");
var bodyParser = require("body-parser");
var consign = require("consign");
const fileUpload = require('express-fileupload');

require("./banco")("localhost/portfolio");

var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,usuario-logado');
    res.header("Access-Control-Expose-Headers","Content-type,Accept,x-access-token,usuario-logado"); /*permite ler o cabeçalho*/ 
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.set('secret', 'portfolio');
// app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



consign({ cwd: 'server' })
    .include("models")
    .then("controllers")
    .then("routes/Auth.js")
    .then("routes")
    .into(app);

module.exports = app;