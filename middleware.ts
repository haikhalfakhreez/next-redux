import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  async function middleware(req) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    })

    console.log("MIDDLEWARE TOKEN = ", token)

    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith("/login")

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url))
      }

      return null
    }

    if (!isAuth) {
      return NextResponse.rewrite(new URL("/unauthorized", req.url))
    }
  },
  {
    callbacks: {
      async authorized(pr) {
        console.log("MIDDLEWARE authorized = ", pr)
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/", "/login"],
}
