import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CounterApp() {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [count]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {userData && (
          <div>
            <h2>User Information</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            {/* Display other user information as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default CounterApp;
