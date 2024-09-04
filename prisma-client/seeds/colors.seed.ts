import { PrismaClient } from "@prisma/client";
import { colorsSeeds } from "../data/colors";

export const colorsSeeder = async (prisma: PrismaClient) => {

      
    const colors = await prisma.productColor.findMany({});
    if (!colors || colors.length === 0){
        const seededColors = await prisma.productColor.createMany({
            data : colorsSeeds
        })
        console.log("/*****************************Colors-Seeded*************************************");
    }
 }
