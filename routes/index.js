var express = require('express');
const app = require('../app');
const res = require('express/lib/response');
const req = require('express/lib/request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
