var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'cadebuzufba'
	});
}

module.exports = function () {
	console.log('A conexão com o db foi iniciada.');
	return connMySQL;
}