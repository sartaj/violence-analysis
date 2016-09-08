var node_cj = require("node-csv-json");


 node_cj({
   input: "data.csv",
   output: "data.json"
 }, function(err, result){
   if(err) {
     console.error(err);
   }else {
     console.log(result)
   }
 });
