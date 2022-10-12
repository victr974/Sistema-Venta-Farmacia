const {Router} = require('express');
const{ createEmpleado,
    getEmpleados,
    getEmpleado,
    updateEmpleado,
    deleteEmpleado
} = require('../controllers/empleado.controller');

const router = new Router();

router.post('/empleado',createEmpleado);
router.get('/empleado',getEmpleados);
router.get('/empleado/:id',getEmpleado);
router.put('/empleado/:id', updateEmpleado);
router.delete('/empleado/:id',deleteEmpleado);


module.exports = router;