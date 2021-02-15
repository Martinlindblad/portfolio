const router = require('express').Router();
const Experience = require("../models/experience.model");

router.route('/').get((req, res) => {
  Experience.find()
      .then(prof => res.json(prof))
      .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;