export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export type UserCreate = {
  name: string
  job: string
}
