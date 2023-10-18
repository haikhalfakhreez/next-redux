import { User } from "@/lib/types"
import { getUsers } from "@/lib/api"
import { UsersTable } from "@/components/users-table"
import { HomeHeader } from "@/components/home-header"

/**
 * Filter the API response to display all records with first
 * name starting with “G”, or last name starting with “W”.
 */
function filterUsers(users: User[]) {
  return users.filter(({ first_name, last_name }) => {
    return first_name.startsWith("G") || last_name.startsWith("W")
  })
}

export default async function Home() {
  const users = await getUsers()
  const filteredUsers = filterUsers(users)

  return (
    <main>
      <HomeHeader />
      <section className="container py-8">
        <UsersTable users={filteredUsers} />
      </section>
    </main>
  )
}
