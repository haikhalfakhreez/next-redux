"use client"

import { Provider } from "react-redux"
import { reduxStore } from "@/lib/redux/store"
import { TooltipProvider } from "@/components/ui/tooltip"

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <TooltipProvider>{props.children}</TooltipProvider>
    </Provider>
  )
}
