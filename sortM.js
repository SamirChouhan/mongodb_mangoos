const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Createdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Establish Successfully")
    })
    .catch((err) => {
        console.log(err)
    })

const SSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    marks: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Studentlist = new mongoose.model("StudentList", SSchema)

const sort = async () => {
    try {
        const result = await Studentlist
            .find()
            // .select({ l_name: 1 })
            .sort({marks : -1}); // 1 for ASC and -1 for DES
            //.countDocuments();//.count()
        console.log(result)
    }
    catch (err) {
        console.log(err);
    }
}

sort()  