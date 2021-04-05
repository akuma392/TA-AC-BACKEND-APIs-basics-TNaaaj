var express = require('express');
var router = express.Router();

var Country = require('../models/country');
var State = require('../models/state');

router.get('/', (req, res, next) => {
  console.log();
  State.find({})
    .populate('neighbouring_states')
    .populate('country')
    .exec((err, state) => {
      if (err) return next(err);

      res.json(state);
    });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  State.findById(id, (err, state) => {
    if (err) return next(err);

    res.json(state);
  });
});
router.put('/:id', (req, res, next) => {
  let id = req.params.id;

  Country.findByIdAndUpdate(id, req.body, (err, state) => {
    if (err) return next(err);

    res.json(state);
  });
});
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  State.findByIdAndDelete(id, (err, state) => {
    if (err) return next(err);

    if (err) return next(err);
    res.json(state);
  });
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  req.body.country = id;
  State.create(req.body, (err, state) => {
    if (err) return next(err);

    Country.findOneAndUpdate(
      id,
      { $push: { states: state._id } },
      (err, country) => {
        if (err) return next(err);
        res.send(`${state.name} is added`);
      }
    );
  });
});

module.exports = router;
