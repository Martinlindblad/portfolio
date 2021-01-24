const mongoose = require("mongoose");

const japanSchema = mongoose.Schema({
    // name: {
    //     first: String,
    //     last: { type: String, trim: true }
    //   },
    //   age: { type: Number, min: 0 }
})

const Japan = mongoose.model("Japan", japanSchema);

module.exports = Japan;