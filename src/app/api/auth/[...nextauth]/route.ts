import type { NextAuthOptions } from "next-auth";
 
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
 
export const OPTIONS: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "crusherblack",
        },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
};
 
const handler = NextAuth(OPTIONS);
 
export { handler as GET, handler as POST };