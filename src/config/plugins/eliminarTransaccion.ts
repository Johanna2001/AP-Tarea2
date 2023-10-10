import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function eliminarTransaccion(transaccionId: number) {
  try {
    const transaccionEliminada = await prisma.transaccion.delete({
      where: { id: transaccionId },
    });
    console.log('Transacción eliminada:', transaccionEliminada);
  } catch (error) {
    console.error('Error al eliminar la transacción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

eliminarTransaccion(1);