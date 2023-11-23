import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & {
            username: string;
            emailVerified: Date | null;
            email: string;
            password: string;
            bio: string;
            pp: string;
            banner: string;
            role: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }
    interface User extends DefaultUser {
        username: string;
        emailVerified: Date | null;
        email: string;
        password: string;
        bio: string;
        pp: string;
        banner: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }
};
declare module "next-auth/jwt" {
    interface JWT {
        username: string;
        emailVerified: Date | null;
        email: string;
        password: string;
        bio: string;
        pp: string;
        banner: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }
};