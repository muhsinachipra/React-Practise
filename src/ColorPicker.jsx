import React, { useState } from "react";

export default function ColorPicker() {

    const [color,setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h2>Pick A Color</h2>
            <div className="color-display" style={{backgroundColor : color}}>
                <p >
                    Selected Color : {color}
                </p>
            </div>
            <label >Set Color</label> <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}
