import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()

function ComponentA() {
    const [user, setUser] = useState('muhsin')
    return (
        <div className="box">
            <UserContext.Provider value={user}>
                <h1>ComponentA</h1>
                <h2>{`hi ${user}`}</h2>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA
