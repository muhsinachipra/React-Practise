import ComponentB from "./ComponentB"
import React, { useState, createContext } from "react"

export const UserContext = createContext()

export default function ComponentA() {

    const [user, setUser] = useState('Muhsin')

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}