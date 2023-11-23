import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        // check if email is existing
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if ( existingUserByEmail ) {
            return NextResponse.json({ user: null, message: "This email is already exists"}, { status: 409 })
        };

        // check if name is existing
        const existingUserByName = await db.user.findUnique({
            where: { email: email }
        });
        if ( existingUserByName ) {
            return NextResponse.json({ user: null, message: "This name is already exists"}, { status: 409 })
        };

        // hash password
        const hashedpassword = await hash(password, 12);

        // Create new user
        const newUser = await db.user.create({
            data: {
                email: email,
                username: username,
                password: hashedpassword
            }
        });

        const { password: newUserPassword, ...rest } = newUser;

        // Response
        return NextResponse.json({ user: rest, message: "success" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ user: null, message: "unexpected error" }, { status: 500 });
    };
};