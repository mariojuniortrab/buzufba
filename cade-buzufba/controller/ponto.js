module.exports.pontos= function(app, req, res){

    var connection = app.config.dbConnection();
    var PontoDAO= new app.models.PontoDAO(connection);
    
    PontoDAO.listar(function (error, result) {
        res.render("pontos", { pontos: result});
    });
		
}

module.exports.novo= function(app, req, res){
    var ponto = [{id:'', nome:''}];
	res.render("ponto", { ponto: ponto });		
}

module.exports.editar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var PontoDAO	= new app.models.PontoDAO(connection);
    var id 			= req.params.id;  
	
    PontoDAO.getById(id, function (error, result) {
        res.render("ponto", { ponto: result});
    });	
}


module.exports.salvar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var PontoDAO	= new app.models.PontoDAO(connection);
    var ponto 	    = req.body;

    PontoDAO.salvar(ponto, function (error, result) {

    console.log(error);
		PontoDAO.listar(function (error, result) {
        	res.render("pontos", { pontos: result});
    	});
    });	
}
