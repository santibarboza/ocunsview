/* GET ide page */
const ide = function(req, res) {
	res.render('ide', {
		title: 'OCUNS-Entorno Web'
	});
};


module.exports = {
  ide
}; 
