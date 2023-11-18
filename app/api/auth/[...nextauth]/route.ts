import { db } from "@/lib/db";
import { compare } from "bcryptjs-react";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
        // signOut: "",
        // error: "",
        // verifyRequest: "",
        // newUser: "",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const dbUser = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!dbUser) {
                    return null;
                }

                const isPasswordValid = await compare(
                    credentials.password,
                    dbUser.password
                );

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: dbUser.id + "",
                    email: dbUser.email,
                    name: dbUser.name,
                    role: dbUser.role,
                    // profilePhoto: dbUser.profilePhoto
                    createdAt: dbUser.createdAt,
                    updatedAt: dbUser.updatedAt
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    role: token.role,
                    // profilePhoto: token.profilePhoto
                    createdAt: token.createdAt,
                    updatedAt: token.updatedAt
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    role: u.role,
                    // profilePhoto: u.profilePhoto
                    createdAt: u.createdAt,
                    updatedAt: u.updatedAt
                };
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };