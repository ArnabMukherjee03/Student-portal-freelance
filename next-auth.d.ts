import NextAuth, { DefaultSession } from "next-auth";

export type Extendeduser = DefaultSession["user"] & {
    isFormFilled: boolean
};

declare module "next-auth" {
    interface Session {
        user: Extendeduser
    }
}