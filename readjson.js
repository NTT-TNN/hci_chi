var fs = require('fs');
var obj;
fs.readFile('1.geojson', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  for(var i=0;i<obj.features.length;++i){
    console.log(obj.features[i].properties.Field1);
    console.log(obj.features[i].properties.Field2);
    console.log(obj.features[i].properties.Field3);
    console.log(obj.features[i].properties.Field4);
    console.log(obj.features[i].properties.Field5);
    console.log(obj.features[i].properties.Field6);
    console.log(obj.features[i].properties.Field7);
    console.log(obj.features[i].properties.Field8);
  }
});
