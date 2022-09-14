// Rutas para producto
const express = require('express');
const router = express.Router();
const barthelController = require('../controllers/BarthelController');

// api/productos
router.post('/', barthelController.enviarTest);
//router.get('/', barthelController.obtenerTest);
router.get('/:id', barthelController.obtenerTestByIdEnc);
router.get('/uni/:id', barthelController.obtenerTest);

module.exports = router;