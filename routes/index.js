var express = require('express');
var router = express.Router();
var fs = require('fs');
var assert = require('assert');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  fs.readFile('../app-wx/dist/index.html', (err, file) => {
    if (err) {
      return res.end(util.inspect(err));
    }
    res.set('Content-Type', 'text/html');
    res.end(file);
  })
});

module.exports = router;
