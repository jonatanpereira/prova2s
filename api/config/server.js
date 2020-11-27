"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(routes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



const port = 1234;

app.listen(port, () => {
    console.log(`Server Startado ${port}`);
});