var express = require('express');
var router = express.Router();
var path = require("path");
var media =path.join(__dirname,"../public/media")

/* GET home page. */
router.get('/', function(req, res, next) {
  var fs = require("fs");
  fs.readdir(media ,function (err,names){
    // var k = __dirname;
    if (err) {
      console.log(err)
    }else {
      res.render('index', { title: 'Your Show',music:names,dirname:__dirname });
    }
  })
  
});

module.exports = router;
