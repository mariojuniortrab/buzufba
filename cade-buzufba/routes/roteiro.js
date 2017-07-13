module.exports = function(app) {
	
	app.get('/roteiros', function(req, res){
		app.controller.roteiro.roteiros(app, req, res);		
	});

	app.get('/roteiro', function(req, res){
		app.controller.roteiro.roteiro(app, req, res);		
	});

	app.get('/novo_roteiro', function(req, res){
		app.controller.roteiro.novo(app, req, res);		
	});
	
	app.post('/salvar_roteiro', function(req, res){
		app.controller.roteiro.salvar(app, req, res);	
	});
	
	app.get('/editar_roteiro/:id', function(req, res){
		app.controller.roteiro.editar(app, req, res);	
	});

};