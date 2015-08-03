'use strict';

var express = require('express');
var controller = require('./movie.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/imdb/:imdbID', controller.getMovie);
router.get('/favourite', controller.getFavourites);
router.post('/favourite/imdb', controller.setUnsetFavourite);

module.exports = router;
