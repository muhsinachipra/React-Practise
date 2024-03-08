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
import React, { useEffect, useState } from "react";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>{windowWidth}</div>
  );
}

export default App;
