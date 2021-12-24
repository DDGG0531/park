const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const parkData = [
  {
    name: 'Park 1',
    description: 'Park 1 description',
    lat: 1.1,
    lon: 1.1,
  },
  {
    name: 'Park 2',
    description: 'Park 2 description',
    lat: 2.1,
    lon: 2.1,
  }
]



async function main() {
  console.log(`Start seeding ...`)
  for (const p of parkData) {
    const park = await prisma.park.create({
      data: p,
    })
    console.log(`Created park with id: ${park.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
