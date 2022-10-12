const pool = require('../config/db.config');

const createCliente = async (req, res, next) => {
    try {
        const { nit, nombre, apellido, direccion} = req.body
        const result = await pool.query("INSERT INTO cliente (nit, nombre, apellido, direccion ) VALUES ($1, $2, $3, $4)", [nit, nombre, apellido, direccion ]);

        console.log(result)
        //res.send('Creando una tarea')
        res.json(result.rows[0]);
        //  var data = req.body;
        res.status(200).send({ message: result });
        return res.json(result.rows[0]);

    }
    catch (error) {
        next(error);
    }

};

const getClientes = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM cliente");
        //console.log(result);
        // res.send(result)
        res.json(result.rows);
    }
    catch (error) {
        next(error);

    }
};

const getCliente = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM cliente WHERE id_cliente=$1", [id]);

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

const updateCliente = async (req, res, next) => {

    try{
        const { id } = req.params;
        const { nit, nombre, apellido, direccion} = req.body;

        const result = await pool.query("UPDATE cliente SET nit =$1, nombre=$2, apellido= $3, direccion = $4 WHERE id_cliente = $5 ",
            [ nit, nombre, apellido, direccion, id]);
    
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

const deleteCliente = async (req, res, next) => {

    try {
        const { id } = req.params
        const result = await pool.query("DELETE FROM cliente  WHERE id_cliente=$1", [id]);

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
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente


}