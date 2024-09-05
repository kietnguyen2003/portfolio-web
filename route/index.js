const express = require('express');
const router = express.Router();
const moveController = require('../controllers/moveController.js');

router
  .get('/home', moveController.getHome)

module.exports = router;
