import { getSession } from "@/lib/session"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export async function UserAvatar() {
  const session = await getSession()
  const username = getUsername(session?.user?.name) || "GS"

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={session?.user?.image ?? ""} />
      <AvatarFallback>{username}</AvatarFallback>
    </Avatar>
  )
}

function getUsername(name: string | null | undefined) {
  if (!name) return ""

  const split = name.split(" ")

  if (split.length === 1) {
    return split[0][0] + split[0][1]
  }

  return split[0][0] + split[1][0]
}
