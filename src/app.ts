import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Ejemplo de uso de Prisma
async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

getUsers()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });