const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Createdb",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("connection successfull..."))
.catch((err) => console.log(err));

const SlistSchema = new mongoose.Schema({
    f_name:{
        type:String,
        required:true
    },
    l_name:{
        type:String,
        required:true
    },
    marks:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
}) 

const Studentlist = new mongoose.model("Studentlist",SlistSchema)
// var MongoClient = require('mongodb').MongoClient;

// var url ="mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     console.log("Database created");    
//     db.close();
// })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url,function(err,db)
// {
//     if(err) throw err;
//     console.log("Database Created...!!!");
//     var dbo = db.db("Mydb");
//     dbo.createCollection("Customers", function(err,res)
//     {
//         if(err) throw err;
//         console.log("Collection Created");
//         db.close();
//     });
// });
