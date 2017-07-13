module.exports.apontamentos= function(app, req, res){

    var connection = app.config.dbConnection();
    var ApontamentoDAO= new app.models.ApontamentoDAO(connection);
    
    ApontamentoDAO.listar(function (error, result) {
    	console.log(result);
        res.render("apontamentos", { apontamentos: result});
    });	
}

module.exports.novo= function(app, req, res){
	var connection = app.config.dbConnection();
	var roteirosDAO= new app.models.RoteirosDAO(connection);
	var pontoDAO= new app.models.PontoDAO(connection);
    var apontamento = [{id:'', nome:''}];

	pontoDAO.listar(function (error, result) {
		var pontos = result;
		roteirosDAO.listar(function (error, result) {
			var roteiros = result;
		
			res.render("apontamento", {roteiros: roteiros, pontos: pontos, apontamentos:apontamento});
		});
	});	
}

module.exports.editar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var ApontamentoDAO	= new app.models.ApontamentoDAO(connection);
    var id 			= req.params.id;  
	
    ApontamentoDAO.getById(id, function (error, result) {
        res.render("apontamentos", { apontamentos: result});
    });	
}


module.exports.salvar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var ApontamentoDAO	= new app.models.ApontamentoDAO(connection);
    var apontamento 	= req.body;

		//Validação
		req.assert('id_roteiro','Roteiro deve ser escolhido').notEmpty();
		req.assert('id_ponto','Ponto deve ser escolhido').notEmpty();

		var  erros= req.validationErrors();
		if(erros){
			res.render("apontamento", {validacao: erros});
			return;
		}

    ApontamentoDAO.salvar(apontamento, function (error, result) {
		ApontamentoDAO.listar(function (error, result) {
        	res.render("index", { apontamentos: result});
    	});
    });	
}

/*module.exports.apontamento= function(app, req, res){

		var connection = app.config.dbConnection();
		var roteirosDAO= new app.models.RoteirosDAO(connection);
		var pontoDAO= new app.models.PontoDAO(connection);

		pontoDAO.getPonto(function (error, result) {
			var pontos = result;
			roteirosDAO.getRoteiros(function (error, result) {
				var roteiros = result;
			
				res.render("apontamento", {roteiros: roteiros, pontos: pontos, validacao:{}});
			});
		});
		//res.render("apontamento", {title: "Cade o Buzufba"});
}

module.exports.salvarApontamento= function(app, req, res){

	var apontamento = req.body; 
		
		//Validação
		req.assert('id_roteiro','Roteiro deve ser escolhido').notEmpty();
		req.assert('id_ponto','Ponto deve ser escolhido').notEmpty();

		var  erros= req.validationErrors();
		if(erros){
			res.render("apontamento", {validacao: erros});
			return;
		}

		var connection = app.config.dbConnection();
		var apontamentoDAO= new app.models.ApontamentoDAO(connection);

		apontamentoDAO.salvarApontamento(apontamento, function (error, result) {
				
				console.log(result);
				res.redirect('/');
				//res.render("apontamento", {apontamento: result});
				//res.send("Chegou na pagina.");
			});

}*/