var express = require('express');
var questionRouter = express.Router();
var questioncontroller = require('../controllers/question.controller');
questionRouter.route('/').get(questioncontroller.get)

module.exports = questionRouter;