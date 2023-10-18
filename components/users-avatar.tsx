import { User } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UsersAvatar({ user }: { user: User }) {
  const username = user.first_name[0] + user.last_name[0]
  return (
    <Avatar>
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{username}</AvatarFallback>
    </Avatar>
  )
}
