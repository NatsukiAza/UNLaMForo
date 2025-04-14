import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }
  
        const user = await db.user.findUnique({
          where: {email: credentials.email},
        })
  
        if(!user) {
          throw new Error("No existe un usuario con ese mail");
        }
  
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
  
        if (!isPasswordCorrect) {
          throw new Error("Contraseña incorrecta")
        }
  
        return{
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token}) {
      if (session.user) {
        session.user.role = token.role as "USER" | "ADMIN";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user as unknown as { id: string; role: "USER" | "ADMIN" };
        token.role = user.role;
      }
      return token;
    },

  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "@/app/sign_in",
  },
  
  secret: process.env.NEXTAUTH_SECRET,
}

export const auth = () => getServerSession(authOptions);