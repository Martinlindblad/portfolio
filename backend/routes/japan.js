const router = require('express').Router();
const Japan = require("../models/japan.model");

router.route('/').get((req, res) => {
  Japan.find()
      .then(prof => res.json(prof))
      .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;