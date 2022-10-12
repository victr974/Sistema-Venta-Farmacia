const {Router} = require('express');
const{ createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente

} = require('../controllers/cliente.controller');

const router = new Router();

router.post('/cliente',createCliente);
router.get('/cliente',getClientes);
router.get('/cliente/:id',getCliente);
router.put('/cliente/:id', updateCliente);
router.delete('/cliente/:id',deleteCliente);


module.exports = router;