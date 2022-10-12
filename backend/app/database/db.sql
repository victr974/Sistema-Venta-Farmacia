
CREATE DATABASE farmacia

CREATE TABLE empleado(
    id serial primary key,
    nombre varchar(255),
    apellido varchar(255),
	direccion varchar(255),
	telefono int,
	salario int
);

CREATE TABLE proveedor(
    id_proveedor serial primary key,
    nombre varchar(255),
	apellido varchar(255),
	telefono varchar(255),
	direccion varchar(255)
);

CREATE TABLE cliente(
    id_cliente serial primary key,
	nit varchar(255),
	nombre varchar(255),
	apellido varchar(255),
	direccion varchar(255)
);

CREATE TABLE producto(
    id_producto serial primary key,
    id_proveedor int,
	nombre varchar(255),
	description varchar(255),
	price int,
	stock int,
	FOREIGN KEY (id_proveedor) REFERENCES proveedor(id_proveedor) on delete cascade on update cascade
);

create table foto_productos(
    foto varchar(255) not null,
    id_producto int,
    foreign key(id_producto) references producto(id_producto) on delete cascade on update cascade

)

CREATE TABLE factura(
    numfactura serial primary key,
	fechafactura VARCHAR(50),
	id_cliente INT,
	FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) on delete cascade on update cascade
); 

CREATE TABLE detallefactura(
    numdetallefactura serial primary key,
	numfactura int,
	id_producto varchar(255),
    cantidad int,
	procentaje_ganancia int,
	FOREIGN KEY (numfactura) REFERENCES factura(numfactura) on delete cascade on update cascade
)