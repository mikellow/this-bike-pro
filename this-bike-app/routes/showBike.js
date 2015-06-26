var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("showBike.js GET");
  res.render('show-page', { title: 'Show page',json: { test: 69 }});
});

module.exports = router;
