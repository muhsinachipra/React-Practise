import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import CounterApp from "./CounterApp";
import OnChange from "./OnChange";
import ColorPicker from "./ColorPicker";
import Fruits from "./Fruits";
import Cars from "./Cars";
import ToDoList from "./ToDoList";
import A1 from "./Assignment/A1";
import A2 from "./Assignment/A2";
import MC3 from "./UseEffect";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import RefHook from "./RefHook";
import StopWatch from "./StopWatch";
import React, { useEffect, useMemo, useState } from "react";

export default function App() {

  const [number, setNumber] = useState(2)
  const [dark, setDark] = useState(true)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const Theme = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])


  useEffect(() => {
    console.log("Theme ")
  }, [Theme])


  return (
    <div>
      <input type="number" value={number} onChange={(e) => {
        setNumber(e.target.value);
      }} />
      <br />
      <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
      <div style={Theme}>{doubleNumber}</div>
    </div>
  );

}


const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) { }
  return number * 2
}
