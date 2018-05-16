var panelMemoria, contenedorCode,contenedorCompilado,contenedorSimulacion;
$('#ventanas').multipleSelect({
    placeholder:"Ventanas Habilitadas",
    minimumCountSelected:2,
    countSelected:"# Ventanas Habilitadas",
    selectAll: false,
    onClick: function(view) {
                if(view.checked)
                    ventanasArray[view.value].mostrar();
                else
                   ventanasArray[view.value].ocultar();
            },
    onCheckAll: function() {
                for(componente in ventanasArray)
                    componente.mostrar();
            },
    onUncheckAll: function() {
                for(componente in ventanasArray)
                    componente.ocultar();
            }
});
$('#ventanas').multipleSelect('checkAll');

contenedorCode = new Vue({
  el: '#contenedorCode',
  data: {
    ver: true,
    bigSize:'col-md-4'
  },
  methods: {
    ocultar:ocultarCode,
    mostrar:mostrarCode
  }
})
contenedorCompilado = new Vue({
  el: '#contenedorCompilado',
  data: {
    ver: true,
    bigSize:'col-md-3',
    texto:"Aca iria el codigo compilado"
  },
  methods: {
    ocultar:ocultarCompilado,
    mostrar:mostrarCompilado
  }
})
contenedorSimulacion = new Vue({
  el: '#contenedorSimulacion',
  data: {
    ver: true,
    bigSize:'col-md-5',
    paneles:2,   
    panelesArray:[panelRegistros,panelMemoria]
  },
  methods: {
    ocultar:ocultarSimulacion,
    mostrar:mostrarSimulacion,
    setCompilado:setCodigoCompilado        
  }
})
var ventanasArray={"0":contenedorCode,"1":contenedorCompilado,"2":contenedorSimulacion};


