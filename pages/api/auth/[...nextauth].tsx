import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { User } from "next-auth";

const allowedEmails = [
  "paslianp5@gmail.com",
  "paslianp2@gmail.com",
  "tripana211403@gmail.com",
  "sinambelapahala@gmail.com",
  "parishrobinson306@gmail.com",
  "estherpath@gmail.com",
];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account: any;
      profile?: any;
    }) {
      if (allowedEmails.includes(user.email || "")) {
        return true; // Allow sign-in
      } else {
        return false; // Deny sign-in
      }
    },
  },
};

export default NextAuth(authOptions);
