var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("users.js GET");
  
  //res.send('respond with a resource');
	//res.json({ a: 1 });
   res.render('user-page', { title: 'User page',json: { test: 69 }});
   //res.render('user-page', { title: 'siema'});


});

module.exports = router;
