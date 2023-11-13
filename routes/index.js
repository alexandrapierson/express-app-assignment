var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login');

  form.addEventListening('submit', function(event) {
    event.preventDefault();

    window.location.href = '/data';
  });
});


module.exports = router;
