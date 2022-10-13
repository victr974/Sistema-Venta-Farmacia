const pool = require('../config/db.config');
var fs = require('fs');

const createProducto = async (req, res, next) => {
    try {
        const { nombre, description, price, stock, id_proveedor } = req.body
        const result = await pool.query("INSERT INTO producto (nombre, description, price, stock, id_proveedor ) VALUES ($1, $2, $3, $4, $5)", [nombre, description, price, stock, id_proveedor]);

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

const getProductos = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM producto");
        //console.log(result);
        // res.send(result)
        res.json(result.rows);
    }
    catch (error) {
        next(error);

    }
};

const getProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM producto WHERE id_producto=$1", [id]);

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

const updateProducto = async (req, res, next) => {

    try{
        const { id } = req.params;
        const {nombre, description, price, stock, id_proveedor} = req.body;

        const result = await pool.query("UPDATE producto SET nombre =$1, description=$2, price= $3, stock = $4, id_proveedor=$5 WHERE id_producto = $6 ",
            [ nombre, description, price, stock, id_proveedor, id]);
    
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

const deleteProducto = async (req, res, next) => {

    try {
        const { id } = req.params
        const result = await pool.query("DELETE FROM producto  WHERE id_producto=$1", [id]);

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
    createProducto,
    getProductos,
    getProducto,
    updateProducto,
    deleteProducto


}