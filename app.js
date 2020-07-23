const express = require("express");

const app = express();

app.use("/", require("./api"));
app.use("/pin", require("./api/pin"));
app.use("/top-lang", require("./api/top-langs"));

module.exports = app;
