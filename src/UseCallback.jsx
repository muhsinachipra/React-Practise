import React, { useCallback, useState } from 'react'
import UseCallbackList from './UseCallbackList'

export default function UseCallback() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(true)

    const getItems = useCallback(() => {
        return [number + 1, number + 2, number + 3]
    }, [number])

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={(e) => {
                setNumber(parseInt(e.target.value))
            }} />
            <button onClick={() => setDark(d => !d)}>toggle theme</button>
            <UseCallbackList getItems={getItems}></UseCallbackList>
        </div>
    )
}
