var express = require('express');

var app = express();
const port = process.env.PORT || 8080

app.get('/api/ejemplo', function(req,res){ res.send({ msg: "ejemplo con docker???"} )});
app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;