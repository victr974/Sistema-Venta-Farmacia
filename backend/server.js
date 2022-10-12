const express = require('express');

const empleado = require('./app/routes/empleado.routes');
const cliente = require('./app/routes/cliente.routes');
const proveedor = require('./app/routes/proveedor.routes');
const producto = require('./app/routes/producto.routes');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Victor application." });
});

app.use(empleado);  
app.use(cliente);
app.use(proveedor);
app.use(producto);


app.use((err, req, res, next) =>{
    return res.json({ message: err.message})

});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

