import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function getSession() {
  return await getServerSession(authOptions)
}
