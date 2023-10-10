-- CREACIÓN BASE DE DATOS POSTGRES PARA EL PROYECTO FARMALUM
-- Natalia Arboleda Arboleda ID 000165655
-- Valeria Espinal Alcaraz ID
-- Jerónimo Valencia Ospina ID 000165785

-- *******************************
-- Crear y conectarse a la base de datos (omitir el comando create si ya está creada)
-- *******************************

-- crear el esquema la base de datos
create database db_cart_springboot;

--Conectarse a la base de datos 
\c db_cart_springboot;

-- *******************************
-- Creacion de usuarios ADVERTENCIA: la aplicación se conecta con el usuario root(postgres, unaClav3), el usuario es para entrar con DBeaver
-- *******************************

-- crear el usuario con el que se realizará la conexión
create user admin_usr with password 'unaClav3'

-- asignación de privilegios para el usuario
create role editor;
grant connect on database db_cart_springboot to editor;
grant usage on schema public to editor;
grant usage, create on schema public to editor;
alter default privileges in schema public grant select, insert, update, delete on tables to editor;
grant usage on all sequences in schema public to editor;
alter default privileges in schema public grant usage on sequences to editor;
grant editor to admin_usr;

-- *******************************
-- Creacion de tablas 
-- *******************************

-- Crear tabla producto
create table products (
        id bigint generated always as identity not null,
        price bigint,
        photo varchar(255),
        name varchar(255),
        primary key (id)
    )

-- Inserción datos de ejemplo
INSERT INTO products (name, photo, price) VALUES ('Teclado Mecanico RGB', 'Teclado Mecánico con luces RGB switches cherry red', 1000);

INSERT INTO products (name, photo, price) VALUES ('Samsung Smart TV 55', 'Color optimizado para una imagen vibrante y realista gracias al potente Crystal Processor 4K', 3000);

INSERT INTO products (name, photo, price) VALUES ('Audífono Bluetooth Sony', 'Audífono Bluetooth para smartphone', 770);

INSERT INTO products (name, photo, price) VALUES ('Memoria Corsair 16GB DDR5', 'Memoria RAM optimizada para Juegos', 3700);

INSERT INTO products (name, photo, price) VALUES ('Asus Nvidia RTX 4080TI', 'Tarjeta Gráfica para juegos en 4k', 5000);

INSERT INTO products (name, photo, price) VALUES ('CPU Intel Core i7-12700K', 'Alder Lake de 12 cores optimizados para multitareas', 5000);