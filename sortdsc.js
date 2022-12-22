var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var mysort = { author: -1 };  
var dbase= db.db("mydb");
dbase.collection("blogs").find().sort(mysort).toArray(function(err, result) {  
if (err) throw err;  
console.log(result);  
db.close();  
});  
});