const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livroController')

router.get('/', livroController.list)

module.exports = router;