var express = require('express');
var router = express.Router();

var Book = require('../models/book');
var Comment = require('../models/comment');

router.get('/', (req, res, next) => {
  console.log();
  Book.find({}, (err, book) => {
    if (err) return next(err);

    res.json(book);
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) return next(err);

    res.json(book);
  });
});
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, (err, book) => {
    if (err) return next(err);

    res.json(book);
  });
});
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Book.findByIdAndDelete(id, (err, book) => {
    if (err) return next(err);

    res.json(book);
  });
});

router.post('/', (req, res, next) => {
  Book.create(req.body, (err, book) => {
    if (err) return next(err);

    res.send(`${book.title} is added`);
  });
});

module.exports = router;
