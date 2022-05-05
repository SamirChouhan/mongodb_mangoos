const { default: mongoose } = require("mongoose");

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
});

const StudentList = new mongoose.model("StudentList", SSchema)

const del = async (_id) => {
    try {
        const result = await StudentList
            .findByIdAndDelete({_id}); //.deleteOne({_id});
        console.log("Successfully deleted ",result)
    }
    catch (err) {
        console.log(err)
    }
};

del("624c01170d4d3c6087add42f")