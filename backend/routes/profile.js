const router = require('express').Router();
const Profile = require("../models/profile.model");

router.route('/').get((req, res) => {
  Profile.find()
      .then(prof => res.json(prof))
      .catch(error => res.status(400).json('Error: ' + error));
});



module.exports = router;