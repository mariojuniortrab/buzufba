module.exports = function(app) {
	
	app.get('/horarios', function(req, res){
		app.controller.horario.horarios(app, req, res);		
	});

	app.get('/horario', function(req, res){
		app.controller.horario.horario(app, req, res);		
	});

	app.get('/novo_horario', function(req, res){
		app.controller.horario.novo(app, req, res);		
	});
	
	app.post('/salvar_horario', function(req, res){
		app.controller.horario.salvar(app, req, res);	
	});
	
	app.get('/editar_horario/:id', function(req, res){
		app.controller.horario.editar(app, req, res);	
	});

};