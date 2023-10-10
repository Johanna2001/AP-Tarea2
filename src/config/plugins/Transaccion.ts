import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function crearTransaccion(idProducto: number, idComprador: number, cantidad: number, fecha: string) {
  try {
    const nuevaTransaccion = await prisma.transaction.create({
      data: {
        ID_Producto: idProducto,
        ID_Comprador: idComprador,
        cantidad: cantidad,
        fecha: fecha,
      },
    });
    console.log('Nueva transacción creada:', nuevaTransaccion);
  } catch (error) {
    console.error('Error al crear la transacción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

crearTransaccion(1, 2, 10, '2023-10-10');