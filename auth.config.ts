import type { NextAuthConfig, DefaultSession } from "next-auth";
import { protectedRoutes } from "./routes";
import { getUserById } from "./helpers/user";


export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      

      const isLoggedIn = !!auth?.user;
      const user = auth?.user
      

      const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

      if (isProtectedRoute) {
        if (isLoggedIn) {
         return true;
        }
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.isFormFilled = token.isFormFilled;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.isFormFilled = existingUser.isFormFilled;

      return token;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
