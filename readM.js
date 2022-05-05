const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Createdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Establish Successfully...");
    })
    .catch((err) => {
        console.log(err)
    })

const SlistSchema = new mongoose.Schema({
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
const Studentlist = new mongoose.model("Studentlist", SlistSchema)

const getDocuments = async () => {
    try {
        const result = await Studentlist.find({ f_name: "Mannu" })
            .select({ f_name: 1 }) //select use to select only f_name for the collection.
            .limit(1) //limit use to restrict the output to the given value.
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}

getDocuments();