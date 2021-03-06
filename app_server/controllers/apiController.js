
/* Retorna los comentarios que correspondan al grupo o rama que se obtienen como parametro */
const compilar = function(req, res){
  //var id_perteneciente=req.param("id");
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  var codigo=req.body.elemento.code;
  var direccion=req.body.elemento.direccion;
  var usuario={
  	compilo:true,
  	id:"5"
  };

  var error={
  	compilo:false,
  	error: "El Error de Compilacion fue este= "+req.body.elemento.code+ " body= "+  JSON.stringify(req.body) 
  };
  if(codigo=="Funciona")
  	res.status(200).jsonp(usuario);
  else
  	res.status(200).json(error);
};

const ejecucion=function(req,res){
 // Comentario.collection.insert([req.body.elemento],onInsert);
  res.send(req.body);
};
const siguientepaso=function(req,res){
  //Comentario.collection.insert([req.body.elemento],onInsert);
  res.send(req.body);
};
const detener=function(req,res){
  //Comentario.collection.insert([req.body.elemento],onInsert);
  res.send(req.body);
};

module.exports = {
  compilar,
  ejecucion,
  siguientepaso,
  detener
};