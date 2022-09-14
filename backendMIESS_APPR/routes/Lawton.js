// Rutas para producto
const express = require('express');
const router = express.Router();
const lawtonController = require('../controllers/LawtonController');

// api/productos
router.post('/', lawtonController.enviarTest);
router.get('/:id', lawtonController.obtenerTestByIdEnc);
router.get('/uni/:id', lawtonController.obtenerTest);
module.exports = router;