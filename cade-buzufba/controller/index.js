module.exports.index= function(app, req, res){
	var connection = app.config.dbConnection();
    var ApontamentoDAO= new app.models.ApontamentoDAO(connection);
    
    ApontamentoDAO.listar(function (error, result) {
    	console.log(error);
        res.render("index", { apontamentos: result});
    });	
}