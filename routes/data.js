var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let userData = await axios.get('https://jsonplaceholder.typicode.com/users');
  
  res.render('data',
    {
      userData: userData.data,
    });
});

module.exports = router;