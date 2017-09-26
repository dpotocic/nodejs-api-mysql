var express = require('express');
var router = express.Router();
var Book = require('../models/Book');

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        Book.getById(req.params.isbn, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Book.getAll(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res, next) {
    Book.add(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});


module.exports = router;