/* GET home page */
const index = function(req, res) {
	res.render('index', {
		title: 'OCUNS-Entorno Web'
	});
};


module.exports = {
  index
}; 
