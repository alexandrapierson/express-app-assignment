var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', 
  {
    username: 'username',
    password: 'password',
    favoriteHoliday: 'Thanksgiving',
    areaCode: '66762',
    address: '123 N Louis Lane Ave',
  });
});

module.exports = router;