var express = require('express');

var app = express();
const port = process.env.PORT || 80

app.get('/ejemplo', function(req,res){ res.send("ejemplo con docker !!!!")});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;