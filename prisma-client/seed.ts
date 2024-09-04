import { PrismaClient } from "@prisma/client";
import { Roles } from "../common/enums/roles";
import { CommonHelpers } from "../common/helpers";
import { superAdminSeeder } from "./seeds/admin.seed";
import { colorsSeeder } from "./seeds/colors.seed";

const prisma = new PrismaClient();

// function main() is used to generate  the database  with the seed data
async function main() {
  await superAdminSeeder(prisma);
  await colorsSeeder(prisma);
}

// main() is used to  seed the database and the  prisma client is closed after seeding 
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
