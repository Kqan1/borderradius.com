import { db } from "@/lib/db";
import { compare } from "bcryptjs-react";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export function generateStaticParams() {
    const authOptions: NextAuthOptions = {
        pages: {
            signIn: "/login",
        },
        session: {
            strategy: "jwt",
        },
        secret: process.env.NEXTAUTH_SECRET,
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
                        emailVerified: dbUser.emailVerified,
                        password: dbUser.password,
                        username: dbUser.username,
                        bio: dbUser.bio,
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
                        emailVerified: token.emailVerified,
                        password: token.password,
                        username: token.username,
                        bio: token.bio,
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
                        emailVerified: u.emailVerified,
                        bio: u.bio,
                        password: u.password,
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
    return authOptions;
} 

const handler = NextAuth(generateStaticParams()); // Call the function to get the authOptions
export { handler as GET, handler as POST };