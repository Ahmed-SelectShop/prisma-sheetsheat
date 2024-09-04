import { PrismaClient } from '@prisma/client'

// User prisma client to interact with  the database
const prisma = new PrismaClient()

async function main() {
    const generateRandomString = (length: number = 10): string => {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
    }

    // Create a new row in user table
    const user = await prisma.user.create({ data: { name: generateRandomString() }})
    console.log(user)

    // Get all data from user table
    const users = await prisma.user.findMany()
    console.log(users)
}


main() 
.catch(error => { console.log(error.message)})
.finally(async () => { await prisma.$disconnect })