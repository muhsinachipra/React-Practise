import {useState} from "react";

export default function MyComponent(){
    let [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    let [dump, setDump] = useState(false);

    const updateName = () => {
        setName('muhsin')
    } 
    const IncreamentAge = () => {
        setAge(++age)
    } 
    const toggleDump = () => {
        setDump(!dump)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick= {updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick= {IncreamentAge}>Increament Age</button>
            <p>is dump: {dump?"Yes":"Nope"}</p>
            <button onClick= {toggleDump}>toggle dump</button>
        </div>
    );
}
