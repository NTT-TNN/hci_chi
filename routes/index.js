var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {

  var obj;
  fs.readFile('Review.geojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    res.render('index', { obj: obj });
    console.log(obj);
    for(var i=0;i<obj.features.length;++i){

    }
  });


});

module.exports = router;
