module.exports.itinerarios= function(app, req, res){

    var connection = app.config.dbConnection();
    var itinerarioDAO= new app.models.ItinerarioDAO(connection);
    
    itinerarioDAO.listar(function (error, result) {
        console.log(result);
        res.render("itinerarios", { itinerarios: result});
    });
		
}

module.exports.novo= function(app, req, res){
    var connection      = app.config.dbConnection();
	var RoteiroDAO      = new app.models.RoteirosDAO(connection);
	var PontoDAO        = new app.models.PontoDAO(connection);
    var itinerario = [{id:'', nome:''}];
    
    RoteiroDAO.listar(function (error, result) {
        var roteiros = result;
		PontoDAO.listar(function (error, result) {
            res.render("itinerario", { itinerario: itinerario, roteiros:roteiros, pontos:result});
        });
	});		
}

module.exports.editar= function(app, req, res){
	var connection 	    = app.config.dbConnection();
    var itinerarioDAO	= new app.models.ItinerarioDAO(connection);
	var RoteiroDAO      = new app.models.RoteirosDAO(connection);
	var PontoDAO        = new app.models.PontoDAO(connection);
    var id 			    = req.params.id;  
    
    itinerarioDAO.getById(id, function (error, result) {
        var itinerario = result;
        RoteiroDAO.listar(function (error, result) {
            var roteiros = result;
            PontoDAO.listar(function (error, result) {
                res.render("itinerario", { itinerario: itinerario, roteiros:roteiros, pontos:result});
            });
        });	
    });	
}


module.exports.salvar= function(app, req, res){
	var connection 	= app.config.dbConnection();
    var itinerarioDAO	= new app.models.ItinerarioDAO(connection);
    var itinerario 	= req.body;

    itinerarioDAO.salvar(itinerario, function (error, result) {
		itinerarioDAO.listar(function (error, result) {
        	res.render("itinerarios", { itinerarios: result});
    	});
    });	
}