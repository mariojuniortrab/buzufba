module.exports = function(app){
	
	app.get('/itinerarios', function(req, res){
		app.controller.itinerario.itinerarios(app, req, res);		
	});

	app.get('/itinerario', function(req, res){
		app.controller.itinerario.itinerario(app, req, res);		
	});

	app.get('/novo_itinerario', function(req, res){
		app.controller.itinerario.novo(app, req, res);		
	});
	
	app.post('/salvar_itinerario', function(req, res){
		app.controller.itinerario.salvar(app, req, res);	
	});
	
	app.get('/editar_itinerario/:id', function(req, res){
		app.controller.itinerario.editar(app, req, res);	
	});

}
