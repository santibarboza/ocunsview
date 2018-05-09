/* GET ide page */
const getIde = function(req, res) {
	res.render('ide', {
		title: 'OCUNS-Entorno Web'
	});
};


module.exports = {
  getIde
}; 
