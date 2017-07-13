function RoteirosDAO(connection){
	this._connection = connection;
}

RoteirosDAO.prototype.listar= function(callback){

		this._connection.query('select * from roteiros ORDER BY nome', callback);
}

RoteirosDAO.prototype.salvar= function(roteiro, callback){
	if(roteiro.id){
		this._connection.query('update roteiros set ? WHERE id = ?',  [roteiro, roteiro.id], callback);
	}else{
		this._connection.query('insert into roteiros set ?', roteiro, callback);
	}
		
}

RoteirosDAO.prototype.deletar= function(id, callback){
	this._connection.query('delete from roteiros WHERE id = ?', id, callback);		
}

RoteirosDAO.prototype.getById= function(id,callback){
	this._connection.query('select * from roteiros where id = ' + id + ' ORDER BY nome', callback);
}


module.exports= function(){

	return RoteirosDAO;
}