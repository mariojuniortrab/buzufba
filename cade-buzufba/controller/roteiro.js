module.exports.roteiros= function(app, req, res){

    var connection = app.config.dbConnection();
    var roteiroDAO= new app.models.RoteirosDAO(connection);
    
    roteiroDAO.listar(function (error, result) {
        res.render("roteiros", { roteiros: result});
    });
		
}

module.exports.novo= function(app, req, res){
    var roteiro = [{id:'', nome:''}];
	res.render("roteiro", { roteiro: roteiro });		
}

module.exports.editar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var roteiroDAO	= new app.models.RoteirosDAO(connection);
    var id 			= req.params.id;  
	
    roteiroDAO.getById(id, function (error, result) {
        res.render("roteiro", { roteiro: result});
    });	
}


module.exports.salvar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var roteiroDAO	= new app.models.RoteirosDAO(connection);
    var roteiro 	= req.body;
    roteiroDAO.salvar(roteiro, function (error, result) {
		roteiroDAO.listar(function (error, result) {
        	res.render("roteiros", { roteiros: result});
    	});
    });	
}

/*module.exports.salvarHorario= function(app, req, res){

		var horario = req.body; 
		
		//Validação
		req.assert('id_roteiro','Roteiro deve ser escolhido.').notEmpty();
		req.assert('hora','O horário deve ser informado.').notEmpty();
		req.assert('entra_sao_laz','A opção "Entra em São Lázaro" deve ser informada.').notEmpty();
		
		var  erros= req.validationErrors();
		if(erros){
			res.render("cadastro", {validacao: erros});
			return;
		}

		var connection = app.config.dbConnection();
		var horarioDAO= new app.models.HorarioDAO(connection);

		horarioDAO.salvarHorario(horario, function (error, result) {
				
				//console.log(result);
				//res.redirect('/horario');
				//res.render("apontamento", {apontamento: result});
				res.send("Chegou na pagina.");
		});

}*/

