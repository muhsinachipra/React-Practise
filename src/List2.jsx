import React, { useEffect, useState } from "react";

export default function List2({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(10))
        console.log('updating items...')
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}