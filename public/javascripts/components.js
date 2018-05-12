var contenedorCode = new Vue({
  el: '#contenedorCode',
  data: {
    ver: true,
    size:4,
    bigSize:'col-md-'+size
  }
})
var contenedorCompilado = new Vue({
  el: '#contenedorCompilado',
  data: {
    ver: true,
    size:3,
    bigSize:'col-md-'+size
  }
})
var contenedorSimulacion = new Vue({
  el: '#contenedorSimulacion',
  data: {
    ver: true,
    size:5,
    bigSize:'col-md-'+size
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
    contenedorCompilado.ver=false;
    if(contenedorCode.ver)
        contenedorCode.size=contenedorCode.size+contenedorCompilado.size;
    else
        contenedorSimulacion.size=contenedorSimulacion.size+contenedorCompilado.size;
}
