module.exports = function(app){
	
	app.get('/apontamentos', function(req, res){
		app.controller.apontamento.apontamentos(app, req, res);		
	});

	app.get('/apontamento', function(req, res){
		app.controller.apontamento.apontamento(app, req, res);		
	});

	app.get('/novo_apontamento', function(req, res){
		app.controller.apontamento.novo(app, req, res);		
	});
	
	app.post('/salvar_apontamento', function(req, res){
		app.controller.apontamento.salvar(app, req, res);	
	});
	
	app.get('/editar_apontamento/:id', function(req, res){
		app.controller.apontamento.editar(app, req, res);	
	});
}
