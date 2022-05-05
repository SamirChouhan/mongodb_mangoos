const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Createdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Establish successfully...");
    })
    .catch((err) => {
        console.log(err);
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

const Studentlist = new mongoose.model("Studentlist", SSchema);

const getOperater = async () => {
    try {
        const result = await Studentlist
            .find({ marks: { $gt: 80 } })   //$gt:greaterthan, $lt: lessthan, $lte:lessthan equal to, $eq:equal,
            // $gte:greaterthan equal to, $ne: not equal to, $nin: match none value from array
            // .find({f_name: { $in : "Yashi" }}) //$in: match any specified value in an array.
            .select({ f_name: 1, l_name: 1 })
        // .limit(1)
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
};

getOperater();