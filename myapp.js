var express = require('express');
var app = express();
app.get('/', function (req,res) {
	res.send('Hello All, Welcome to safura nodejs app')
});
app.listen(3009, function () {
	console.log('Example app listening on port 3009!');
});

