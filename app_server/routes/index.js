var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlIde = require('../controllers/ide');
const ctrlApi = require('../controllers/apiController');
//const ctrlRamas = require('../controllers/ramasController');
//const ctrlComentarios = require('../controllers/comentariosController');
//const ctrlPreferencias = require('../controllers/preferenciasController');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/ide', ctrlIde.getIde);
router.get('/api/compilar', ctrlApi.compilar);
//router.get('/api/ejecucion', ctrlApi.ejecutar);
//router.get('/api/siguientepaso', ctrlApi.siguientepaso);
//router.get('/api/detener', ctrlApi.detener);

//router.get("/api/preferenciasUsuario", ctrlPreferencias.getPreferencias);
//router.post("/api/preferenciasUsuario", ctrlPreferencias.postPreferencias);

//router.get('/api/comentarios', ctrlComentarios.getComentarios);
//router.post("/api/comentarios", ctrlComentarios.postComentarios);


module.exports = router;
