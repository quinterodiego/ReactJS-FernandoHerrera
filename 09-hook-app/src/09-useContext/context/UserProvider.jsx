import { UserContext } from "./UserContext"

const user = {
  id: 1,
  name: 'Diego Quintero',
  email: 'd86webs@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  )
}
