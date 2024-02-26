import React,{useState} from "react";

export default function MyComponent2(){

    const [car, setCar] = useState({year:2024,
                                    make:"Ford",
                                    model:"Musthang"})

    const handleYearChange =(event)=>{
        setCar(c => ({...c,year:event.target.value}));
    }
    const handleMakeChange =(event)=>{
        setCar(c => ({...c,make:event.target.value}));
    }
    const handleModelChange =(event)=>{
        setCar(c => ({...c,model:event.target.value}));
    }

    return (
        <div>
            <p>My Favorite car: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    );
}