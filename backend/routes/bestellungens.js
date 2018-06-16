var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bestellungen = require('../models/bestellungen');

/* GET ALL BestellungenS */
router.get('/', function(req, res, next) {
  Bestellungen.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Bestellungen BY ID */
router.get('/:id', function(req, res, next) {
  Bestellungen.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Bestellungen */
router.post('/', function(req, res, next) {
  Bestellungen.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Bestellungen */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Bestellungen.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Bestellungen */
router.delete('/:id', function(req, res, next) {
  Bestellungen.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
