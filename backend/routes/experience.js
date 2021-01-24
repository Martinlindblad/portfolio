const router = require('express').Router();
const Experience = require("../models/experience.model");

router.route('/').get((req, res) => {
  Experience.find()
      .then(prof => res.json(prof))
      .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
  const expSend = req.body.name;
  const years = req.body.age;

  const newExpValue = new Experience({ expSend, years });

  newExpValue.save()
      .then(() => res.json('New Exp value added!' + `${newExpValue} ${years} ${expSend}`))
      .catch(error => res.status(400).json('Error: ' + error));
});


module.exports = router;