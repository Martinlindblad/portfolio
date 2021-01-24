const router = require('express').Router();
const Profile = require("../models/profile.model");

router.route('/').get((req, res) => {
  Profile.find()
      .then(prof => res.json(prof))
      .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
  const profileSend = req.body.name;
  const years = req.body.age;

  const newProfileValue = new Profile({ profileSend, years });

  newProfileValue.save()
      .then(() => res.json('New Profile value added!' + `${newProfileValue} ${years} ${profileSend}`))
      .catch(error => res.status(400).json('Error: ' + error));
}); 


module.exports = router;