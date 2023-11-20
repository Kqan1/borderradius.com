import { db } from "@/lib/db";
import { compare } from "bcryptjs-react";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
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
                    username: dbUser.username,
                    role: dbUser.role || "USER",
                    pp: dbUser.pp || '/pp.svg',
                    banner: dbUser.banner,
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
                    username: token.username,
                    role: token.role,
                    pp: token.pp,
                    banner: token.banner,
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
                    username: u.username,
                    role: u.role,
                    pp: u.pp,
                    banner: u.banner,
                    createdAt: u.createdAt,
                    updatedAt: u.updatedAt
                };
            }
            return token;
        },
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };