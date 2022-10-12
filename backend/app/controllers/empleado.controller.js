const pool = require('../config/db.config');

const createEmpleado = async (req, res, next) => {
    try {
        const { nombre, apellido, direccion, telefono, salario } = req.body
        const result = await pool.query("INSERT INTO empleado (nombre, apellido, direccion, telefono, salario ) VALUES ($1, $2, $3, $4, $5)", [nombre, apellido, direccion, telefono, salario]);

        //console.log(result)
        //res.send('Creando una tarea')
        //res.json(result.rows[0]);
        //  var data = req.body;
        res.status(200).send({ message: result });
        //return res.json(result.rows[0]);

    }
    catch (error) {
        next(error);
    }

};

const getEmpleados = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM empleado");
        //console.log(result);
        // res.send(result)
        res.json(result.rows);
    }
    catch (error) {
        next(error);

    }
};

const getEmpleado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM empleado WHERE id=$1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }
        // console.log(result);
        //res.send('Obetendo una tarea')
        res.json(result.rows[0]);
    }
    catch (error) {
        next(error);
    }

};

const updateEmpleado = async (req, res, next) => {

    try{
        const { id } = req.params;
        const { nombre, apellido, direccion, telefono, salario } = req.body;

        const result = await pool.query("UPDATE empleado SET nombre =$1, apellido=$2, direccion= $3, telefono = $4, salario=$5 WHERE id = $6 ",
            [nombre, apellido, direccion, telefono, salario, id]);
    
        if(result.shows.length ===0){
            return res.status(404).json({ message: "Task not found" });
        }
        console.log(result)
        //res.send('Actualizar una tarea');
        return res.json(result.rows[0]);        
    }
    catch (error) {
        next(error);
    }

};

const deleteEmpleado = async (req, res, next) => {

    try {
        const { id } = req.params
        const result = await pool.query("DELETE FROM empleado  WHERE id=$1", [id]);

        // if (result.length === 0) {
        //     return res.status(404).json({ message: "Task not found" });
        // }
        console.log(result);
        res.send('Eliminado una tarea')
        return res.sendStatus(204);
    }
    catch (error) {
        next(error);

    }
};



module.exports = {
    createEmpleado,
    getEmpleados,
    getEmpleado,
    updateEmpleado,
    deleteEmpleado


}