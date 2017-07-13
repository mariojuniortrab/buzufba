function HorarioDAO(connection){
	this._connection = connection;
}

HorarioDAO.prototype.listar = function(callback){
	var sql = "select hr.id as id, hr.id_roteiro as id_roteiro, hr.hora as hora, hr.entra_sao_laz ";
	sql 	+= ", ro.nome as nome_roteiro ";
	sql 	+= " from horario hr ";
	sql 	+= " INNER JOIN roteiros ro on ro.id = hr.id_roteiro"; 
	sql 	+= " ORDER BY ro.id, hr.hora asc;";
	
	this._connection.query(sql, callback);
}

HorarioDAO.prototype.salvar= function(horario, callback){
	if(horario.id){
		this._connection.query('update horario set ? WHERE id = ?', [horario, horario.id], callback);
	}else{
		this._connection.query('insert into horario set ?', horario, callback);
	}
		
}

HorarioDAO.prototype.deletar= function(id, callback){
	this._connection.query('delete from horario WHERE id = ?',id, callback);
}

HorarioDAO.prototype.getById= function(id,callback){
	var sql = "select hr.id as id, hr.id_roteiro as id_roteiro, hr.hora as hora, hr.entra_sao_laz ";
	sql 	+= ", ro.nome as nome_roteiro ";
	sql 	+= " from horario hr ";
	sql 	+= " INNER JOIN roteiros ro on ro.id = hr.id_roteiro"; 
	sql 	+= " where hr.id = " + id + " " ; 
	sql 	+= " ORDER BY ro.id, hr.hora asc;";
	
	this._connection.query(sql, callback);
}

module.exports= function(){
	return HorarioDAO;
}