const pool = require('../config/db.config');

const createProveedor = async (req, res, next) => {
    try {
        const { nombre, apellido, telefono, direccion} = req.body
        const result = await pool.query("INSERT INTO proveedor (nombre, apellido, telefono, direccion ) VALUES ($1, $2, $3, $4)", [nombre, apellido, telefono, direccion]);

        //console.log(result)
        //res.send('Creando una tarea')
        //res.json(result.rows[0]);
        //  var data = req.body;
        //res.status(200).send({ message: result });
        return res.json(result.rows[0]);

    }
    catch (error) {
        next(error);
    }

};

const getProveedores = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM proveedor");
        //console.log(result);
        // res.send(result)
        res.json(result.rows);
    }
    catch (error) {
        next(error);

    }
};

const getProveedor= async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM proveedor WHERE id_proveedor=$1", [id]);

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

const updateProveedor = async (req, res, next) => {

    try{
        const { id } = req.params;
        const {nombre, apellido, telefono, direccion} = req.body;

        const result = await pool.query("UPDATE cliente SET nombre =$1, apellido=$2, telefono= $3, direccion = $4 WHERE id_proveedor = $5 ",
            [ nombre, apellido, telefono, direccion, id]);
    
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

const deleteProveedor = async (req, res, next) => {

    try {
        const { id } = req.params
        const result = await pool.query("DELETE FROM proveedor  WHERE id_proveedor=$1", [id]);

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
    createProveedor,
    getProveedores,
    getProveedor,
    updateProveedor,
    deleteProveedor


}