var express = require('express');
var router = express.Router();
var fs = require('fs');
result=[];
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
  var number_sentences=0;
  var obj;
  fs.readFile('Review.geojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    result=[];
    // console.log(obj);
    for(var i=0;i<obj.features.length  && i<2232;++i){
      // console.log(Math.floor(Math.random() * (10)));
      if(obj.features[i].properties.Field24!="" && obj.features[i].properties.Field24!=null){

        var temp=obj.features[i].properties.Field24.replace(/,/g,'');
        temp=temp.replace(/\s/g, '');
        temp=temp.replace(/[0-9]/g, '');
        temp=temp.replace(/\./g, '');
        if(temp.length>0 && temp.length<5 &&  temp!="Đúng" && temp!="AvàB"){
          // console.log(temp);
          if(Math.floor(Math.random() * (10))==0){
            number_sentences++;
            result[i]=obj.features[i];
            console.log(i);
            if(number_sentences==20){
              break;
            }
          };

        }

      }

    }
    // console.log(result);
    console.log(result.length);
    res.render('quiz', {
      obj: result,
      answer_arr:""
    });
  });


});
router.post('/quiz', function(req, res, next) {
  // console.log(req.body);
    var obj;

  fs.readFile('Review.geojson', 'utf8', function (err, data) {
    // console.log("chi xinh gai");
    if (err) throw err;
    obj = JSON.parse(data);
    // console.log(obj);
    // for(var i=0;i<obj.features.length  && i<2232;++i){
    //
    //   if(obj.features[i].properties.Field24!="" && obj.features[i].properties.Field24!=null){
    //     var temp=obj.features[i].properties.Field24.replace(/,/g,'');
    //     temp=temp.replace(/\s/g, '');
    //     temp=temp.replace(/[0-9]/g, '');
    //     temp=temp.replace(/\./g, '');
    //     if(temp.length>0 && temp.length<5 &&  temp!="Đúng" && temp!="AvàB"){
    //       // console.log(temp);
    //       result.push(obj.features[i])
    //     }
    //
    //   }
    //
    // }



      // console.log(result[i].properties.Field24);
      mark=0;
      answer_arr=[];
      for(var key in req.body){
        // console.log(key);
        answer="";
        console.log(key);
        for(var j=0;j<req.body[key].length;++j){// nhieu phuong an dung
          // console.log(key);
          answer+=req.body[key][j];
        }
        // for(var i=0;i<result.length;++i){
          var temp=result[key].properties.Field24.replace(/,/g,'');
          temp=temp.replace(/\s/g, '');
          temp=temp.replace(/[0-9]/g, '');
          temp=temp.replace(/\./g, '');
          if(answer==temp){
            mark++;
            key=Number(key)+1;
            answer_arr.push(key);
            console.log(answer_arr);
          }
        // }
        // console.log(answer);
    }
    // console.log(mark);
    res.render('quiz_answer', {
      obj: result,
      answer_arr:answer_arr
    });
  });

});

router.get('/quiz_answer', function(req, res, next) {

  var number_sentences=0;
  var obj;
  fs.readFile('Review.geojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    results=[];
    // console.log(obj);
    for(var i=0;i<obj.features.length  && i<2232;++i){
      // console.log(Math.floor(Math.random() * (10)));
      if(obj.features[i].properties.Field24!="" && obj.features[i].properties.Field24!=null){

        var temp=obj.features[i].properties.Field24.replace(/,/g,'');
        temp=temp.replace(/\s/g, '');
        temp=temp.replace(/[0-9]/g, '');
        temp=temp.replace(/\./g, '');
        if(temp.length>0 && temp.length<5 &&  temp!="Đúng" && temp!="AvàB"){
          // console.log(temp);
          // if(Math.floor(Math.random() * (10))==0){
            // number_sentences++;
            results[i]=obj.features[i];
            // console.log(i);
            // if(number_sentences==20){
              // break;
            // }
          // };

        }

      }

    }
    // console.log(result);
    console.log(result.length);
    res.render('quiz', {
      obj: results,
      answer_arr:""
    });
  });


});
module.exports = router;
