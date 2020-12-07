const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');

router.post('/', newsController.createNewsController);

router.get('/', newsController.getAllNewsController);

module.exports = router;