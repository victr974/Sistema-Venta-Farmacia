const {Router} = require('express');
const{ createProducto,
    getProductos,
    getProducto,
    updateProducto,
    deleteProducto
} = require('../controllers/producto.controller');

const router = new Router();

router.post('/producto',createProducto);
router.get('/producto',getProductos);
router.get('/producto/:id',getProducto);
router.put('/producto/:id', updateProducto);
router.delete('/producto/:id',deleteProducto);


module.exports = router;