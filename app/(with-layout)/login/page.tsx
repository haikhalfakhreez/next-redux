import { SignInButton } from "@/components/sign-in-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <main className="flex items-center justify-center flex-1 container">
      <Card className="max-w-[500px] w-full">
        <CardHeader>
          <CardTitle className="font-display">Login or Register</CardTitle>
        </CardHeader>

        <CardContent>
          <SignInButton />
        </CardContent>
      </Card>
    </main>
  )
}
