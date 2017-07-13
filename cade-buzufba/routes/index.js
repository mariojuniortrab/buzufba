module.exports = function(app){
	
	app.get('/', function(req, res){
		
		app.controller.index.index(app, req, res);
	});

}
