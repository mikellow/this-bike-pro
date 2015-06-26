var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("sign.js GET");
  res.render('sign-page', { title: 'Sign page',json: { test: 69 }});
});

module.exports = router;
