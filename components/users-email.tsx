"use client"

import {
  usersSlice,
  useSelector,
  useDispatch,
  selectShownEmailIds,
} from "@/lib/redux"
import { User } from "@/lib/types"
import { maskedEmail } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button, buttonVariants } from "@/components/ui/button"

export function UsersEmail({ user }: { user: User }) {
  const dispatch = useDispatch()
  const shownEmailIds = useSelector(selectShownEmailIds)

  const isEmailShown = shownEmailIds.includes(user.id)
  const displayEmail = isEmailShown ? user.email : maskedEmail(user.email)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          onClick={() => dispatch(usersSlice.actions.toggleEmailId(user.id))}
        >
          {displayEmail}
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        Click to {isEmailShown ? "hide" : "show"} email
      </TooltipContent>
    </Tooltip>
  )
}
