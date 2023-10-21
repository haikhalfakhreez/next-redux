import Link from "next/link"
import { UserProfile } from "@/components/user-profile"
import { getSession } from "@/lib/session"

export async function SiteHeader() {
  const session = await getSession()
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href={session ? "/" : "/login"} className="font-semibold">
          Next Redux
        </Link>

        <div className="flex items-center">
          <UserProfile />
        </div>
      </div>
    </header>
  )
}
