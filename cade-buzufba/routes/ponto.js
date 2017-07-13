module.exports = function(app){
	
	app.get('/pontos', function(req, res){
		app.controller.ponto.pontos(app, req, res);		
	});

	app.get('/ponto', function(req, res){
		app.controller.ponto.ponto(app, req, res);		
	});

	app.get('/novo_ponto', function(req, res){
		app.controller.ponto.novo(app, req, res);		
	});
	
	app.post('/salvar_ponto', function(req, res){
		app.controller.ponto.salvar(app, req, res);	
	});
	
	app.get('/editar_ponto/:id', function(req, res){
		app.controller.ponto.editar(app, req, res);	
	});
}
