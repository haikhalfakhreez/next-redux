export function HomeHeader() {
  return (
    <div className="bg-gradient-radial from-[#a1bfff] to-[#f8fafc]">
      <div className="container py-8">
        <div className="max-w-[500px] space-y-4">
          <h1 className="font-bold text-4xl md:text-7xl font-display">
            Manage Users
          </h1>
          <p className="text-muted-foreground">
            List of all users with first name starting with “G”, or last name
            starting with “W”.
          </p>
        </div>
      </div>
    </div>
  )
}
