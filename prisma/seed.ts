import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt-ts'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: 'rodrigoantunestutz@gmail.com',
      name: 'Rodrigo Tutz',
      password: hashSync('123456789', 10)
    }
  })
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())