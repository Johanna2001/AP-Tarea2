-- Crear la tabla Producto
CREATE TABLE "Producto" (
  "ID_Producto" INT PRIMARY KEY,
  "nombre" VARCHAR(255),
  "precio" DECIMAL(10, 2)

  CONSTRAINT "Producto_pkey" PRIMARY KEY("ID_Producto")
);

-- Crear la tabla Comprador
CREATE TABLE "Comprador" (
  "ID_Comprador" INT PRIMARY KEY,
  "nombre" VARCHAR(255),
  "direccion" VARCHAR(255)

  CONSTRAINT "Comprador_pkey" PRIMARY KEY ("ID_Comprador")

);

-- Crear la tabla Transaccion
CREATE TABLE "Transaccion" (
  "ID_Transaccion" INT PRIMARY KEY,
  "ID_Producto" INT,
  "ID_Comprador" INT,
  "cantidad" INT,
  "fecha" DATE,
  FOREIGN KEY (ID_Producto) REFERENCES Producto(ID_Producto),
  FOREIGN KEY (ID_Comprador) REFERENCES Comprador(ID_Comprador)
);