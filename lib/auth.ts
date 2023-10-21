import { NextAuthOptions, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          picture: user.image,
        }
      }

      return {
        id: token.id,
        name: token.name,
        email: token.email,
        picture: token.picture,
      }
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
  },
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string
    }
  }
}
