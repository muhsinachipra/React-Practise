import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value);
            }} />
            <p>My Name is : {name} and my previous name was : {prevName.current}</p>
        </div>
    )
}

export default UseRef
