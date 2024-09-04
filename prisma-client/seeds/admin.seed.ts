import { Prisma, PrismaClient } from "@prisma/client";
import { Roles } from "../../common/enums/roles";
import { CommonHelpers } from "../../common/helpers";

export const superAdminSeeder = async (prisma: PrismaClient) => {
    const commonHelpers = new CommonHelpers();
    const { hash } = await commonHelpers.passwordHash("123456")
    const superAdmin = await prisma.admin.findFirst({ where: { role:  "SUPER_ADMIN" } });
    console.log({ superAdmin })
    if (!superAdmin) {
        const admin = await prisma.admin.create({
            data: {
                "nameAr": "Select Shop Super-Admin",
                "phoneNumber": "559895200",
                "nameEn": "select shop Super-Admin",
                "email": "selectshop6@gmail.com",
                "password": hash,
                "createdBy":"system",
                "deletedBy": null,
                "activity" : "ACTIVE",
                role : "SUPER_ADMIN"
            }
        });
        console.log({ ALLREADY_ADDED: admin })
    }
}