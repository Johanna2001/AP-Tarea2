import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function obtenerTransaccion(transaccionId: number) {
  try {
    const transaccion = await prisma.transaccion.findUnique({
      where: { id: transaccionId },
    });
    console.log('Transacción encontrada:', transaccion);
  } catch (error) {
    console.error('Error al obtener la transacción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

obtenerTransaccion(1);