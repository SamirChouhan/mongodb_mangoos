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

const createDocument = async() =>{
   try{
    const marks = new Studentlist({
        f_name:"Mannu",
        l_name:"Rajput",
        marks:60,
        active:true
    });
    
    const result = await marks.save();
    console.log(result);  
   }
   catch(err){
       console.log(err);
   }
}
createDocument();
