const {Router} = require('express');
const{     createProveedor,
    getProveedores,
    getProveedor,
    updateProveedor,
    deleteProveedor

} = require('../controllers/proveedor.controller');

const router = new Router();

router.post('/proveedor',createProveedor);
router.get('/proveedor',getProveedores);
router.get('/proveedor/:id',getProveedor);
router.put('/proveedor/:id', updateProveedor);
router.delete('/proveedor/:id',deleteProveedor);


module.exports = router;