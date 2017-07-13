function PontoDAO(connection){
	this._connection = connection;
}

PontoDAO.prototype.listar = function(callback){

		this._connection.query('select * from ponto', callback);
}

PontoDAO.prototype.salvar= function(ponto, callback){
	if(ponto.id){
		this._connection.query('update ponto set ? WHERE id = ?', [ponto, ponto.id], callback);
	}else{
	console.log(ponto.id);
		this._connection.query('insert into ponto set ?', ponto, callback);
	}
		
}

PontoDAO.prototype.deletar= function(id, callback){
	this._connection.query('delete from ponto WHERE id = ?',id, callback);
		
}

PontoDAO.prototype.getById= function(id,callback){

		this._connection.query('select * from ponto where id = ' + id + ' ORDER BY nome', callback);
}

module.exports= function(){

	return PontoDAO;
}