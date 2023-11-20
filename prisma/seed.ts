import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
    const password = await hash("test", 12);
    const userUSER = await prisma.user.upsert({
        where: { email: "test@user.com" },
        update: {},
        create: {
            email: "test@user.com",
            username: "UserAccount",
            password,
            pp: "/pp.svg",
            banner: "banner user",
            bio: "bio user",
            role: "USER"
        },
    });
    const UserADMIN = await prisma.user.upsert({
        where: { email: "test@admin.com" },
        update: {},
        create: {
            email: "test@admin.com",
            username: "AdminAccount",
            password,
            pp: "/hamza.jpg",
            banner: "banner admin",
            bio: "bio admin",
            role: "ADMIN"
        },
    });
    console.log("USER"+ { userUSER }, "ADMİN"+ { UserADMIN });
}
seed()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });