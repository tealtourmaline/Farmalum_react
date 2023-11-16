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

-- Crear tabla categorias
CREATE TABLE "categories"(
    "id" BIGINT generated always as identity not null,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "categories" ADD PRIMARY KEY("id");

-- Crear tabla items por orden
CREATE TABLE "order_items"(
    "id" BIGINT generated always as identity not null,
    "order_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,
    "quantity" BIGINT NOT NULL
);
ALTER TABLE
    "order_items" ADD PRIMARY KEY("id");

-- Crear tabla productos
CREATE TABLE "products"(
    "id" BIGINT generated always as identity not null,
    "price" BIGINT NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "stock" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL
);
ALTER TABLE
    "products" ADD PRIMARY KEY("id");

-- Crear tabla usuarios
CREATE TABLE "users"(
    "id" BIGINT generated always as identity not null,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");

-- Crear tabla ordenes
CREATE TABLE "orders"(
    "id" BIGINT generated always as identity not null,
    "user_id" BIGINT NOT NULL,
    "total" BIGINT NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "categories"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "order_items" ADD CONSTRAINT "order_items_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "orders"("id");
ALTER TABLE
    "order_items" ADD CONSTRAINT "order_items_id_foreign" FOREIGN KEY("id") REFERENCES "products"("id");

-- Inserción datos de ejemplo

-- Categorias
--INSERT INTO categories (name) VALUES ('');

INSERT INTO categories (name) VALUES ('cuidado personal');
INSERT INTO categories (name) VALUES ('dermocosmetica');
INSERT INTO categories (name) VALUES ('alivio del dolor');
INSERT INTO categories (name) VALUES ('tos, gripa y alergias');
INSERT INTO categories (name) VALUES ('vitaminas y nutricion');
INSERT INTO categories (name) VALUES ('homeopaticos');

--Productos
--INSERT INTO products(name, photo, price, stock, category_id) VALUES ('','',,,);

INSERT INTO products (name, photo, price, stock, category_id) VALUES ('Toallas Buenas Noches Tipo Tela Algodón Paquete X 10', 'https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwa526cfe4/images/large/40132_1_TOALLA_BUENAS_NOCHES_TIPO_TELA__NOSOTRAS_PAQ_X_10.jpg.jpg', 11700, 11, 1);

INSERT INTO products (name, photo, price, stock, category_id) VALUES ('Gel Facial Hydro-Boost Water Neutrogena Frasco X 50 Gr', 'https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw7949c6c2/images/large/142222_1_GEL_FACIAL_HYDRO_BOOST_WATER_NEUTROGENA_TUB_X_50GR.jpg', 60278, 7, 2);

INSERT INTO products (name, photo, price, stock, category_id) VALUES ('Crema Dental Colgate Total 12 Clean Mint Tubo X 150 mL', 'https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw029c53b6/images/large/119794_1_COLGATE_TOTAL_12_CLEAN_MINT_CREM_TUB_X_150ML.jpg', 17400, 4, 1);

INSERT INTO products (name, photo, price, stock, category_id) VALUES ('Repuesto Cuchilla Depilacion Gillette Sobre X 2 Venus Breeze', 'https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc5744b38/images/large/154648_1_REPUESTO_CUCHILLA_DEPILACION_GILLETTE_SOB_X_2_VENUS_BREEZE.jpg', 30353, 14, 1);

INSERT INTO products (name, photo, price, stock, category_id) VALUES ('Shampoo Herbal Essences Control Caída Bourbon Manuka Honey Frasco X 400Ml', 'https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw2dd2757b/images/large/164987_1_SHAMPOO_HERBAL_ESSENCES_FCO_X_400ML_BOURBON_MANUKA_HONEY.jpg', 30543, 6, 1);

INSERT INTO products (name, photo, price, stock, category_id) VALUES ('Bio Active Hyaluron Skinacademy Serum Concentrado 35+ Frasco X 30Ml', 'https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc71cbfa1/images/large/297979_1_BIO_ACTIVE_HYALURON_SKINACADEMY_SERUM_CONCENTRADO_35_FCO_X_30ML.jpg', 36700, 8, 2);

INSERT INTO products(name, photo, price, stock, category_id) VALUES ('Redugel Arawak Pot X 400Gr Eliminar Grasa Localizada','https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc93b75f5/images/large/166299_1_REDUGEL_ARAWAK_POT_X_400GR_ELIMINAR_GRASA_LOCALIZADA.jpg',30320, 0, 2);

INSERT INTO products(name, photo, price, stock, category_id) VALUES ('Gel Limpiador Espumoso Para Piel Normal A Grasa Frasco X 473mL','https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe85533a7/images/large/291934_1_CERAVE_FOAMING_CLEANSER_FCO_X_473ML_PARA_PIEL_NORMAL_A_GRASA.jpg',86760, 20, 2);

-- Usuarios
-- insert into users (email, password, username, admin, active) values ('','','',,);

insert into users (email, password, username, admin, active) values ('jeronimo.valencia@upb.edu.co','nano', 'jvalencia', true, true);
insert into users (email, password, username, admin, active) values ('natalia.arboledaa@upb.edu.co','gyro', 'nanito', false, true);
insert into users (email, password, username, admin, active) values ('valeria.espinal@upb.edu.co','nose', 'val(eria)', false, false);