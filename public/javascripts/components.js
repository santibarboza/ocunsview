var contenedorCode,contenedorCompilado,contenedorSimulacion
var ventanas=[contenedorCode,contenedorCompilado,contenedorSimulacion]
$('#ventanas').multipleSelect({
    placeholder:"Ventanas Habilitadas",
    minimumCountSelected:2,
    countSelected:"# Ventanas Habilitadas",
    onClick: function(view) {
                if(view.checked)
                    ventanas[view.value].mostrar();
                else
                    ventanas[view.value].ocultar();
                alert("Selected text: " +view.value+
                    (view.checked ? 'checked' : 'unchecked'));
            }
});

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
    bigSize:'col-md-3'
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
    bigSize:'col-md-5'
  },
  methods: {
    ocultar:ocultarSimulacion,
    mostrar:mostrarSimulacion        
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

