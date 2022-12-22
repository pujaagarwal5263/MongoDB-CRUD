var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { auther: "Sanket" };
  var newvalues = { $set: {author: "Pratik", title: "About Songs" } };
  dbo.collection("blogs").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});