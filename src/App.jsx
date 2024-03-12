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
import List2 from "./List2";

import FunctionalComponent from "./FunctionContextComponent";
import ClassComponent from "./ClassContextComponent";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const ThemeContext = React.createContext();

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalComponent />
      <ClassComponent />
    </ThemeContext.Provider>
  );

}

