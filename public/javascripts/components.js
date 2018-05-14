$('#ventanas').multipleSelect({
    placeholder:"Ventanas Habilitadas",
    onClick: function(view) {
                alert("Selected text: " +view.value+
//                $eventResult.text(view.label + '(' + view.value + ') ' + 
                    (view.checked ? 'checked' : 'unchecked'));
            }
});

var contenedorCode = new Vue({
  el: '#contenedorCode',
  data: {
    ver: true,
    bigSize:'col-md-4'
  },
  methods: {
    ocultar:
          function ocultarCode(){

            if(this.ver){
                this.ver=false;
                if(contenedorCompilado.ver && contenedorSimulacion.ver){
                    contenedorCompilado.bigSize='col-md-4';
                    contenedorSimulacion.bigSize='col-md-8';
                 }else if(!contenedorSimulacion.ver)
                        contenedorCompilado.bigSize='col-md-12';
                    else
                        contenedorSimulacion.bigSize='col-md-12';
           }
  
     },
    mostrar:
          function mostrarCode(){
  
          if(!this.ver){
                this.ver=true;
                this.bigSize='col-md-4';
                if(contenedorCompilado.ver && contenedorSimulacion.ver){
                    contenedorCompilado.bigSize='col-md-3';
                    contenedorSimulacion.bigSize='col-md-5';
                }else if(contenedorCompilado.ver){
                            this.bigSize='col-md-9';
                            contenedorCompilado.bigSize='col-md-3';
                     }else if(contenedorSimulacion.ver){
                            this.bigSize='col-md-9';
                            contenedorSimulacion.bigSize='col-md-5';
                        }else {
                            this.bigSize='col-md-12';
                        }
           }
 
      }
  }
})
var contenedorCompilado = new Vue({
  el: '#contenedorCompilado',
  data: {
    ver: true,
    bigSize:'col-md-3'
  },
  methods: {
    ocultar:
          function ocultarCompilado(){
            if(this.ver){
                this.ver=false;
                if(contenedorCode.ver && contenedorSimulacion.ver)
                    contenedorCode.bigSize='col-md-7';
                else if(!contenedorSimulacion.ver)
                        contenedorCode.bigSize='col-md-12';
                    else
                        contenedorSimulacion.bigSize='col-md-12';
           }
       },
    mostrar:
          function mostrarCompilado(){
            if(!this.ver){
                this.ver=true;
                this.bigSize='col-md-3';
                if(contenedorCode.ver && contenedorSimulacion.ver)
                    contenedorCode.bigSize='col-md-4';
                else if(contenedorCode.ver)
                            contenedorCode.bigSize='col-md-9';
                     else if(contenedorCompilador.ver){
                            this.bigSize='col-md-4';
                            contenedorSimulacion.bigSize='col-md-8';
                        }else {
                            this.bigSize='col-md-12';
                        }
           }
       }
  }
})
var contenedorSimulacion = new Vue({
  el: '#contenedorSimulacion',
  data: {
    ver: true,
    bigSize:'col-md-5'
  },
  methods: {
    ocultar:
          function ocultarSimulacion(){
            if(this.ver){
                this.ver=false;
                if(contenedorCode.ver && contenedorCompilado.ver){
                    contenedorCode.bigSize='col-md-8';
                    contenedorCompilado.bigSize='col-md-4';
                }else if(!contenedorCompilado.ver)
                        contenedorCode.bigSize='col-md-12';
                    else
                        contenedorCompilado.bigSize='col-md-12';
           }
     },
    mostrar:
          function mostrarSimulacion(){
          if(!this.ver){
                this.ver=true;
                this.bigSize='col-md-5';
                if(contenedorCode.ver && contenedorCompilado.ver){
                    contenedorCode.bigSize='col-md-4';
                    contenedorCompilado.bigSize='col-md-3';
                }else if(contenedorCode.ver)
                        contenedorCode.bigSize='col-md-7';
                     else if(contenedorCompilado.ver){
                            this.bigSize='col-md-8';
                            contenedorSimulacion.bigSize='col-md-4';
                        }else {
                            this.bigSize='col-md-12';
                        }
           }
      }
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

