const router = require('express').Router();
const Profile = require("../models/profileModel");

router.route('/').get((req, res) => {
  Profile.find()
    .then(prof => res.json(prof))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/", (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    tag: req.body.tag
  });

  profile
    .save()
    .then(result => {
      // res.json(result);
      console.log(result);
    })
    .catch(err => {
      // res.json({ message: err });
      console.log(err);
    });
});


module.exports = router;