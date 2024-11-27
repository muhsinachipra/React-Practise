import { useState } from "react";

export default function Fruits() {
  const [fruits, setFruits] = useState(["mango", "apple"]);

  const addFruit = () => {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";

    setFruits((f) => [...f, newFruit]);
  };

  const removeFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => removeFruit(index)}>
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" id="fruitInput" placeholder="Add Fruits" />
      <button onClick={addFruit}>Enter</button>
    </div>
  );
}
