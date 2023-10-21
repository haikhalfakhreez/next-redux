import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Ban } from "lucide-react"

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-red-200 to-white flex">
      <div className="container flex items-center justify-center flex-1">
        <div className="space-y-8 text-center">
          <Ban className="h-20 w-20 mx-auto text-red-600" />

          <h1 className="font-bold font-display text-4xl md:text-7xl">
            401 Unauthorized
          </h1>

          <p className="text-secondary-foreground">
            You are not authorized to view this page. Please log in.
          </p>

          <Link
            className={buttonVariants({
              size: "lg",
            })}
            href="/login"
          >
            Log In
          </Link>
        </div>
      </div>
    </main>
  )
}
