var contenedorCode = new Vue({
  el: '#contenedorCode',
  data: {
    ver: true,
    bigSize:'col-md-4'
  }
})
var contenedorCompilado = new Vue({
  el: '#contenedorCompilado',
  data: {
    ver: true,
    bigSize:'col-md-3'
  }
})
var contenedorSimulacion = new Vue({
  el: '#contenedorSimulacion',
  data: {
    ver: true,
    bigSize:'col-md-5'
  }
})
var panelRegistros = new Vue({
  el: '#panelRegistros',
  data: {
    ver: true
  }
})
var panelMemoria = new Vue({
  el: '#panelMemoria',
  data: {
    ver: true
  }
})
function ocultarCompilado(){
   // contenedorCompilado.ver=false;
 //   if(contenedorCode.ver)
  //      contenedorCode.size=contenedorCode.size+contenedorCompilado.size;
    //else
      //  contenedorSimulacion.size=contenedorSimulacion.size+contenedorCompilado.size;
}
