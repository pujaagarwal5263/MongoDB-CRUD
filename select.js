var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/MongoDatabase";  

MongoClient.connect(url, function(err, db) {  
  if (err) throw err;  
  var dbase= db.db("UserInfo");
  dbase.collection("UserDetails").find({}).toArray(function(err, result) {  
    if (err) throw err;  
    console.log(result);  
    db.close();  
  });  
});
