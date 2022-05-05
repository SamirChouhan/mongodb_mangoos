const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Createdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Establish sucessfully");
    })
    .catch((err) => {
        console.log(err)
    });

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

const Studentlist = new mongoose.model("Studentlist", SSchema);

const LogOperater = async () => {
    try {
        const result = await Studentlist
            .find({ $or: [{ f_name: "Yashi" }, { marks: 89 }] }) //$or, $and, $not, $nor
            .select({ f_name: 1, marks: 1 })
        console.log(result)
    }
    catch (err) {
        console.log(err);
    }
}

LogOperater()