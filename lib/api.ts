import { User, UserResponse } from "@/lib/types"

// Fetch a single page of users
async function fetchUsersPage(page: number): Promise<UserResponse> {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch page ${page}: ${response.statusText}`)
  }
  return response.json()
}

// Fetch all users recursively
export async function getUsers(
  page: number = 1,
  allUsers: User[] = []
): Promise<User[]> {
  try {
    const { data, total_pages } = await fetchUsersPage(page)
    const users = allUsers.concat(data)

    if (page < total_pages) {
      return getUsers(page + 1, users)
    }

    return users
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching users:", error.message)
    }
    throw error
  }
}
