const { default: mongoose } = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/Createdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Establish Successfully");
    })
    .catch((err) => {
        console.log(err)
    })

const SSchema = new mongoose.Schema({
    f_name: {
        type: String,
        require: true, 
        trim:true,    //predefine valideation :-
        minlength:2  //lowercase:true, uppercase:true, trim, match, minlength, manlength, enum, min, max
        //enum:["","",""],
    },
    l_name: {
        type: String,
        require: true
    },                
    marks: {
        type:Number,
        validate(value){   //custom validation:-
            if(value < 0){
                throw new Error("Must me Postive");
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){  //npm validator
                throw new Error("Email is invalid");
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

const StudentList = new mongoose.model("StudentList", SSchema);


const Validation = async () => {
    try{      //Insert Document
        const marks = new StudentList({
            f_name:"Yash",
            l_name:"Tomar",
            email:"samir04001@.com",
            marks: 30, //marks:value
            active:true
        });
        
        const result = await marks.save();
        console.log(result);  
       }
       catch(err){
           console.log(err);
       }
    }

Validation();