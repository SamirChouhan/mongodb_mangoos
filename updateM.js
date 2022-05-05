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
    },
})

const StudentList = new mongoose.model("StudentList", SSchema);

const update = async (_id) => {
    try {
        const result = await StudentList.findByIdAndUpdate({ _id }, {
            $set: {
                f_name: "Priti",
                l_name: "Ghadha Dhari Bheam"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}

update("624c3f60424cf9eb6a93ed42");