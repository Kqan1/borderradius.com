import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const password = await hash("test", 12);
    const userUSER = await prisma.user.upsert({
        where: { email: "test@user.com" },
        update: {},
        create: {
            email: "test@user.com",
            name: "UserAccount",
            password,
            phoneNumber: 0,
            ProfilePhoto: "pp",
        },
    });
    const UserADMIN = await prisma.user.upsert({
        where: { email: "test@admin.com" },
        update: {},
        create: {
            email: "test@admin.com",
            name: "AdminAccount",
            password,
            phoneNumber: 0,
            ProfilePhoto: "pp",
        },
    });
    console.log("USER"+ { userUSER }, "ADMİN"+ { UserADMIN });
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
