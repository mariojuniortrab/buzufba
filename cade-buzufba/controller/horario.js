module.exports.horarios= function(app, req, res){

    var connection = app.config.dbConnection();
    var HorarioDAO= new app.models.HorarioDAO(connection);
    
    HorarioDAO.listar(function (error, result) {
        res.render("horarios", { horarios: result});
    });
		
}

module.exports.novo= function(app, req, res){
    var connection = app.config.dbConnection();
	var RoteiroDAO= new app.models.RoteirosDAO(connection);
    var horario = [{id:'', nome:''}];
		
	RoteiroDAO.listar(function (error, result) {
		res.render("horario", { horario: horario, roteiros:result});
	});	
}

module.exports.editar= function(app, req, res){
	var connection 	= app.config.dbConnection();
	var RoteiroDAO= new app.models.RoteirosDAO(connection);
    var HorarioDAO	= new app.models.HorarioDAO(connection);
    var id 			= req.params.id;  

    HorarioDAO.getById(id, function (error, result) {
		console.log(result);
		var horario = result;
		RoteiroDAO.listar(function (error, result) {
        	res.render("horario", { horario: horario, roteiros:result});
		});
		
    });	
}


module.exports.salvar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var HorarioDAO	= new app.models.HorarioDAO(connection);
    var horario 	= req.body;

    HorarioDAO.salvar(horario, function (error, result) {
		HorarioDAO.listar(function (error, result) {
        	res.render("horarios", { horarios: result});
    	});
    });	
}

/*module.exports.horario= function(app, req, res){

		var connection = app.config.dbConnection();
		//var roteirosDAO= new app.models.RoteirosDAO(connection);
		var horarioDAO= new app.models.HorarioDAO(connection);

		//roteirosDAO.getRoteiros(function (error, result) {
		//	var roteiros = result;
		//	console.log(roteiros);
			horarioDAO.getHorario(function (error, result) {
				//var horario = result;
			
				res.render("horario", { horario: result});
			});//roteiros: roteiros,
		//});
}

module.exports.cadastro= function(app, req, res){
	
		var connection = app.config.dbConnection();
		var roteirosDAO= new app.models.RoteirosDAO(connection);

		roteirosDAO.getRoteiros(function (error, result) {
			//res.send(result);
			console.log(result);
			res.render("cadastro", { roteiros: result })
		
		});
}

module.exports.salvarHorario= function(app, req, res){

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

