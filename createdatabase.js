const MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/newdb";  

//CREATE DATABASE
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
console.log("Database created!");  
db.close();  
});

MongoClient.connect(url, (err,db)=>{
    var dbase=db.db("newdb");
    dbase.createCollection("newcoll",(err,res)=>{
        if (err) throw err;
        console.log("new collection added");
    })
});