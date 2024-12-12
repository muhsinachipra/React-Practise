// import Header from "./Header";
// import Footer from "./Footer";
// import Food from "./Food";
// import Card from "./Card";
// import Button from "./Button/Button";
// import Student from "./Student";
// import UserGreeting from "./UserGreeting";
// import List from "./List";
// import ProfilePicture from "./ProfilePicture";
// import MyComponent from "./MyComponent";
// import MyComponent2 from "./MyComponent2";
// import CounterApp from "./CounterApp";
// import OnChange from "./OnChange";
// import ColorPicker from "./ColorPicker";
// import Fruits from "./Fruits";
// import Cars from "./Cars";
// import ToDoList from "./ToDoList";
// import A1 from "./Assignment/A1";
// import A2 from "./Assignment/A2";
// import MC3 from "./UseEffect";
// import DigitalClock from "./DigitalClock";
// import ComponentA from "./ComponentA";
// import RefHook from "./RefHook";
// import StopWatch from "./StopWatch";
// import List2 from "./List2";
// import FunctionalComponent from "./FunctionContextComponent";
// import UseReducer2 from "./UseReducer2";
// import UseRef from "./UseRef";
import App2 from "./albumGallery/App2";
import { CounterProvider } from "./ContextCounter/CounterContext";
import CounterDisplay from "./ContextCounter/CounterDisplay";
import CounterIncrement from "./ContextCounter/CounterIncrement";
import Test from "./Test";
// import UseCallback from "./UseCallback"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary";

export default function App() {

  return (
    <CounterProvider>
      <Router>
        <div>
          <h1>Simple Counter App with Context</h1>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Test />} />
              <Route path="/increment" element={<CounterIncrement />} />
              <Route path="/counter-display" element={<CounterDisplay />} />
              <Route path="/album" element={<App2 />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    </CounterProvider>
  )

}

