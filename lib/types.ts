export type UserResponse = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}

export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
