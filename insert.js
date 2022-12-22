// const MongoClient = require('mongodb').MongoClient;  
// var url = "mongodb://localhost:27017/ MongoDatabase";  

//INSERT ONE
// MongoClient.connect(url, function(err, db) {  
// if (err) throw err;  
// var myobj = { title: "About Food", auther: "Deepti", catgry: "Food" };  
// var dbase = db.db("mydb");
// dbase.collection("blogs").insertOne(myobj, function(err, res) {  
// if (err) throw err;  
// console.log("1 blog inserted");  
// db.close();  
// });  
// });

//INSERT MULTIPLE OBJECTS
// MongoClient.connect(url, function(err, db) {  
//     if (err) throw err;  
//     var myobj = [     
//     { title: "About Food", auther: "Deepti", catgry: "Food"},  
//     { title: "How to play Guitar", auther: "Sanket", catgry: "Music"},  
//     {title: "Design home like palace", auther: "Megha", catgry: "Decor"}
//     ];  
//     var dbase = db.db("mydb");
//     dbase.collection("blogs").insert(myobj, function(err, res) {  
//     if (err) throw err;  
//     console.log("Number of records inserted: " + res.insertedCount);  
//     db.close();  
//     });  
//     });

const MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017//newdb";

MongoClient.connect(url,(err,db)=>{
    var dbase=db.db("newdb");
    var myobj={firstname:"Shreay",lastname:"Singh"};
    dbase.collection("newcoll").insertOne(myobj,(err,res)=>{
        if(err) throw err;
        console.log("Inserted");
    });
});

MongoClient.connect(url,(err,db)=>{
    var dbase=db.db("newdb");
    dbase.collection("newcoll").findOne({firstname:"Puja"}).toArray((err,data)=>{
        console.log(data);
    })
});