import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id: 1,
//     name: 'Diego Quintero',
//     email: 'd86webs@gmail.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
