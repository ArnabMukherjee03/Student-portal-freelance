import {authConfig} from "@/auth.config";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";


 
export default NextAuth(authConfig).auth;


// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};