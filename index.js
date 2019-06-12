var express = require('express');

var app = express();


app.get('/ejemplo', function(req,res){ res.send("ejemplo con docker")});

app.listen(8080, '0.0.0.0');
module.exports = app;