function ApontamentoDAO(connection){
	this._connection = connection;
}

ApontamentoDAO.prototype.listar = function(callback){
	var sql = "select ap.id as id, DATE_FORMAT(ap.hora,'%T') as hora, DATE_FORMAT(ap.hora,'%d %b %Y') as data, pon.nome as ponto, rot.nome as roteiro";
	sql 	+= " from apontamento ap INNER JOIN ponto pon on pon.id = ap.id_ponto" ;
	sql 	+= " INNER JOIN roteiros rot on rot.id = ap.id_roteiro"; 
	sql 	+= " ORDER BY ap.hora desc;";
	
	this._connection.query(sql, callback);
}

ApontamentoDAO.prototype.salvar= function(apontamento, callback){

	if(apontamento.id){
		this._connection.query('update apontamento ? WHERE id = ?', [apontamento, apontamento.id], callback);
	}else{
		this._connection.query('insert into apontamento set ?', apontamento, callback);

	}
		
}

ApontamentoDAO.prototype.deletar= function(id, callback){
	this._connection.query('delete from apontamento WHERE id = ?',id, callback);
}

ApontamentoDAO.prototype.getById= function(id,callback){
	var sql = "select ap.id as id, DATE_FORMAT(ap.hora,'%T') as hora, DATE_FORMAT(ap.hora,'%d %b %Y') as data, pon.nome as ponto, rot.nome as roteiro";
	sql 	+= " from apontamento ap INNER JOIN ponto pon on pon.id = ap.id_ponto" ;
	sql 	+= " INNER JOIN roteiros rot on rot.id = ap.id_roteiro"; 
	sql 	+= " where ap.id = " + id + " " ; 
	sql 	+= " ORDER BY ap.hora desc;";
	
	this._connection.query(sql, callback);
}
module.exports= function(){

	return ApontamentoDAO;
}