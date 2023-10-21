import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { fontDisplay, fontSans } from "@/lib/fonts"
import { Providers } from "@/components/providers"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next Redux",
  description:
    "A sample application to showcase to use of Next.js with App Router, and Redux as client side state management.",
  metadataBase: new URL("https://next-redux-ts.vercel.app"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontDisplay.variable
          )}
        >
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </body>
      </html>
    </Providers>
  )
}
