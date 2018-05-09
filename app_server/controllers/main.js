/* GET home page */
const index = function(req, res) {
	res.render('index', {
		title: 'Scouts y Guias en Argentina',
		filtros: Filtro,
		grupos: Grupo
	});
};


module.exports = {
  index
}; 
