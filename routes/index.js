var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/', function(req, res) {
  res.send('Olá Mundo!')
});

router.post('/', function(req, res) {
  res.send('Obteve uma requisição POST');
});

router.get('/usuarios', function(req, res) {
res.send('Obteve uma requisição GET em /usuarios');
});

router.put('/usuarios', function(req, res) {
  res.send('Obteve uma requisição PUT em /usuarios');
});

router.delete('/usuarios', function(req, res) {
  res.send('Obteve uma requisição DELETE em /usuarios');
});

module.exports = router;
