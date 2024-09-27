import React, { useEffect, useState } from 'react'

export default function UseCallbackList({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('items changed')
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}
