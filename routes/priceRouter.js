const express = require('express');
const priceRouter = express.Router();
const priceController = require('./../controllers/priceController');
priceRouter.route('/:url').get(priceController.getPrice);
module.exports = priceRouter;