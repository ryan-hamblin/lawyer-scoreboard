var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var mySql = require('mysql');

var app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());

//Connector
var connection = new Sequelize('lawyer_scoreboard', 'root', 'August13', {host: 'localhost'})
//Model
var Lawyer = connection.define('lawyer', 
{
	name: Sequelize.STRING,
	location: Sequelize.STRING,
	record: Sequelize.FLOAT,
	hourly: Sequelize.FLOAT
})
//End Point
app.get('/lawyers', function (req, res){
	console.log("GET lawyer request...")
	Lawyer.all().then(function(data){
		res.send(data);
	})
})
try {
	connection.sync();
}
catch(err) {
	console.log('database error: ' + err);
}




app.listen(3001);