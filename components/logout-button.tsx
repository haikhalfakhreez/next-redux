"use client"

import { signOut } from "next-auth/react"
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"

export function LogoutButton() {
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
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  )
}
