const express = require('express');
const orderController = require('../controller/order.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const orderMiddleware = require('../middlewares/orderMiddleware');

const router = express.Router();

router.post('/', authMiddleware, orderMiddleware, orderController.createOrder);
router.get('/details', authMiddleware, orderController.getDetailedOrder);
router.get('/:id', authMiddleware, orderController.getById);
router.get('/', authMiddleware, orderController.getAll);

module.exports = router;