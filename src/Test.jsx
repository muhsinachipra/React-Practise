import { useState } from 'react';
import Child from './Child';  // Import the Child component

const Parent = () => {
    const [message, setMessage] = useState('Hello from Parent!');  // Parent's state

    const updateMessage = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Message: {message}</p>
            <Child message={message} onUpdateMessage={updateMessage} />
        </div>
    );
};

export default Parent;













// import { useReducer } from "react";



// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + 1 }
//         case "decrement":
//             return { count: state.count - 1 }
//         default:
//             return state
//     }
// }


// export default function UseReducer2() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 })

//     function increment() {
//         dispatch({ type: "increment" })
//     }
//     function decrement() {
//         dispatch({ type: "decrement" })
//     }

//     return (
//         <div>
//       <button onClick={increment}>+</button>
//       {state.count}
//       <button onClick={decrement}>-</button>
//     </div>
//     )
// }



// import { useState } from 'react';

// function ControlledInput() {
//     const [value, setValue] = useState('');

//     const handleChange = (e) => {
//         setValue(e.target.value); // Update state with input value
//     };

//     return (
//         <div>
//             <input type="text" value={value} onChange={handleChange} />
//             <p>{value}</p>
//         </div>
//     );
// }

// export default ControlledInput;







// import { useState, useMemo, useCallback } from 'react';

// // Sample data for products
// const products = [
//     { id: 1, name: 'Product 1', price: 100 },
//     { id: 2, name: 'Product 2', price: 200 },
//     { id: 3, name: 'Product 3', price: 300 },
// ];

// const ShoppingCart = () => {
//     const [cart, setCart] = useState([]);
//     const [discount, setDiscount] = useState(0);

//     const addToCart = useCallback((product) => {
//         setCart((prevCart) => [...prevCart, product]);
//     }, [])

//     // useMemo to calculate the total price of the cart
//     const totalPrice = useMemo(() => {
//         const total = cart.reduce((acc, item) => acc + item.price, 0);
//         return total - (total * (discount / 100)); // Apply discount
//     }, [cart, discount]); // Recalculate when cart or discount changes

//     return (
//         <div>
//             <h1>Shopping Cart</h1>
//             <h2>Products</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => addToCart(product)}>Add to Cart</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Cart</h2>
//             <ul>
//                 {cart.map((item, index) => (
//                     <li key={index}>
//                         {item.name} - ${item.price}
//                     </li>
//                 ))}
//             </ul>

//             <h3>Total Price: ${totalPrice}</h3>

//             <label>
//                 Discount (%):
//                 <input
//                     type="number"
//                     value={discount}
//                     onChange={(e) => setDiscount(Number(e.target.value))}
//                 />
//             </label>
//         </div>
//     );
// };

// export default ShoppingCart;
