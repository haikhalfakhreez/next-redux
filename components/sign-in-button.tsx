"use client"

import { signIn } from "next-auth/react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function SignInButton() {
  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => signIn("google")}
    >
      <Icons.google className="h-4 w-4 mr-2" />
      <span>Login with Google</span>
    </Button>
  )
}
