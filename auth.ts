import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./helpers/user";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const ValidatedFields = LoginSchema.safeParse(credentials);

        if (ValidatedFields.success) {
          const { email, password } = ValidatedFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

         
          
          if (passwordsMatch) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
});
