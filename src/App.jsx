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

  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return countOne % 2 === 0
  },[countOne])

  return (
    <div>
      <div>
        <button onClick={() => {
          setCountOne(prev => prev + 1)
        }}>CounterOne - {countOne}</button>
        <span>{isEven ? 'even' : 'odd'}</span>
      </div>
      <div>
        <button onClick={() => {
          setCountTwo(prev => prev + 1)
        }}>CounterTwo - {countTwo}</button>
      </div>
    </div>
  );

}

