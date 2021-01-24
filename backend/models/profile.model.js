const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    // name: {
    //     first: String,
    //     last: { type: String, trim: true }
    //   },
    //   age: { type: Number, min: 0 }
})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;