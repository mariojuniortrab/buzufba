function ItinerarioDAO(connection){
	this._connection = connection;
}

ItinerarioDAO.prototype.listar = function(callback){
	var sql = "select it.id as id, it.id_ponto as id_ponto, it.id_roteiro as id_roteiro, it.ordem as ordem ";
	sql 	+= ", po.nome as nome_ponto, ro.nome as nome_roteiro ";
	sql 	+= " from itinerario it ";
	sql		+= " INNER JOIN ponto po on po.id = it.id_ponto" ;
	sql 	+= " INNER JOIN roteiros ro on ro.id = it.id_roteiro"; 
	sql 	+= " ORDER BY ro.id, it.ordem;";
	
	this._connection.query(sql, callback);
}

ItinerarioDAO.prototype.salvar= function(itinerario, callback){
	if(itinerario.id){
		this._connection.query('update itinerario set ? WHERE id = ?', [itinerario, itinerario.id], callback);
	}else{
		this._connection.query('insert into itinerario set ?', itinerario, callback);
	}
		
}

ItinerarioDAO.prototype.deletar= function(id, callback){
	this._connection.query('delete from itinerario WHERE id = ?',id, callback);
}

ItinerarioDAO.prototype.getById= function(id,callback){
	var sql = "select it.id as id, it.id_ponto as id_ponto, it.id_roteiro as id_roteiro, it.ordem as ordem ";
	sql 	+= ", po.nome as nome_ponto, ro.nome as nome_roteiro ";
	sql 	+= " from itinerario it ";
	sql		+= " INNER JOIN ponto po on po.id = it.id_ponto" ;
	sql 	+= " INNER JOIN roteiros ro on ro.id = it.id_roteiro"; 
	sql 	+= " where it.id = " + id + " " ; 
	sql 	+= " ORDER BY ro.id, it.ordem;";
	
	this._connection.query(sql, callback);
}

module.exports= function(){
	return ItinerarioDAO;
}