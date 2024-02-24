// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import react, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipment] = useState("delivary");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  const handleShipmentChange = (event) => {
    setShipment(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleNameChange} />
      <p>name:{name}</p>
      <hr />

      <input onChange={handleQuantityChange} type="number" />
      <p>quantity:{quantity}</p>
      <hr />

      <textarea onChange={handleCommentChange} placeholder="hello" />
      <p>comment:{comment}</p>
      <hr />

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select a value</option>
        <option value="visa">visa</option>
        <option value="upi">upi</option>
        <option value="mastercard">mastercard</option>
      </select>
      <p>payment:{payment}</p>
      <hr />
      
      <label>
        <input
          type="radio"
          value="pick up"
          onChange={handleShipmentChange}
          checked={shipping === "pick up"}
        />
        pick up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="delivary"
          onChange={handleShipmentChange}
          checked={shipping === "delivary"}
        />
        delivary
      </label>
      <p>shipping: {shipping}</p>
      <hr />

    </div>
  );
}
