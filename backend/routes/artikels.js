var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Artikel = require('../models/artikel');

/* GET ALL ArtikelS */
router.get('/', function(req, res, next) {
  Artikel.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Artikel BY ID */
router.get('/:id', function(req, res, next) {
  Artikel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Artikel */
router.post('/', function(req, res, next) {
  Artikel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Artikel */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Artikel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Artikel */
router.delete('/:id', function(req, res, next) {
  Artikel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
