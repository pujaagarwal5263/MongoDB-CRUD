// const MongoClient = require('mongodb').MongoClient;  
// var url = "mongodb://localhost:27017/mydb";  


// //CREATE A COLLECTION
// MongoClient.connect(url, function(err, db) {  
//     if (err) throw err;  
//     var dbase = db.db("mydb");
//     dbase.createCollection("blogs", function(err, res) {  
//     if (err) throw err;  
//     console.log("Collection is created!");  
//     db.close();  
//     });  
//     });

const MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err,db)=>{
    var dbase=db.db("mydb");
    dbase.createCollection("newColl",(err, res)=>{
       if (err) throw err;
       console.log("new collection added in my db");
       db.close();
    })
})

