import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontDisplay = localFont({
  src: "../assets/fonts/cal.woff2",
  variable: "--font-display",
})
