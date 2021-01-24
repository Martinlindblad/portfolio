const mongoose = require("mongoose");

const expSchema = mongoose.Schema({
    name: {
        first: String,
        last: { type: String, trim: true }
      },
      age: { type: Number, min: 0 }
})

const Experience = mongoose.model("Experience", expSchema);

module.exports = Experience;