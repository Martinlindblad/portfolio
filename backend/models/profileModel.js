const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    name: String,
    tag: String
})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;