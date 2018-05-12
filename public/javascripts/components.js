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
    if(contenedorCompilado.ver){
        contenedorCompilado.ver=false;
        if(contenedorCode.ver && contenedorSimulacion.ver)
            contenedorCode.bigSize='col-md-7';
        else if(!contenedorSimulacion.ver)
                contenedorCode.bigSize='col-md-12';
            else
                contenedorSimulacion.bigSize='col-md-12';
    }
}
