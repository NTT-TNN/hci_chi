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
  });


});

router.get('/quiz', function(req, res, next) {

  var obj;
  fs.readFile('Review.geojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    res.render('quiz', { obj: obj });
    console.log(obj);
    for(var i=0;i<obj.features.length;++i){

    }
  });


});
router.post('/quiz', function(req, res, next) {
  // console.log(req.body);
    var obj;
  fs.readFile('Review.geojson', 'utf8', function (err, data) {
    // console.log("chi xinh gai");
    if (err) throw err;
    obj = JSON.parse(data);
    res.render('quiz', { obj: obj });


    for(var i=0;i<obj.features.length && i<2232;++i){
      console.log(obj.features[i].properties.Field24);
      for( var key in req.body){
        // console.log(key);
        var flag=true;
        for(var j=0;j<req.body[key].length;++j){// nhieu phuong an dung
          // console.log(req.body[key][j]);

        }
      }
    }
  });


});

module.exports = router;
