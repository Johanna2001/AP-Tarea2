import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function actualizarTransaccion(transaccionId: number, nuevaCantidad: number, nuevaFecha: string) {
  try {
    const transaccionActualizada = await prisma.transaccion.update({
      where: { id: transaccionId },
      data: {
        cantidad: nuevaCantidad,
        fecha: nuevaFecha,
      },
    });
    console.log('Transacción actualizada:', transaccionActualizada);
  } catch (error) {
    console.error('Error al actualizar la transacción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

actualizarTransaccion(1, 20, '2023-10-11');