"use client"

import * as React from "react"
import { signOut } from "next-auth/react"
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "l" && event.metaKey) {
        signOut({
          callbackUrl: "/login",
        })
      }
    }
    window.addEventListener("keydown", handleKeydown)
    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  return (
    <DropdownMenuItem
      onSelect={() =>
        signOut({
          callbackUrl: "/login",
        })
      }
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
    </DropdownMenuItem>
  )
}
