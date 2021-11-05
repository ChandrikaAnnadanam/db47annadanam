var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Eagle', { title: 'Search Results by Eagle' });
});

module.exports = router;
