
/* Retorna los comentarios que correspondan al grupo o rama que se obtienen como parametro */
const compilar = function(req, res){
  //var id_perteneciente=req.param("id");
  var codigo=req.body.code;
  var direccion=req.body.direccion;
  var usuario={
  	compilo:true,
  	id:"5"
  };
  var error={
  	compilo:false,
  	error: "El Error de Compilacion fue este"
  }
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
  ejecucion,
  siguientepaso,
  detener,
  compilar
};