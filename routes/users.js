var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send({res: 'users works!'});
});

router.get('/login', function(req, res) {
  req.core.users.login();
});

router.get('/:id', function(req, res) {
  res.status(200).send({res: req.params.id || 'meh'});
});

router.get("/authenticated", function (req, res) {
  // do something
});

module.exports = router;
