import React from "react"

export default function Die(props){

    const holdStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "#fafafa" 
    }

    return (
        <div 
        className="single-die" 
        style={holdStyle}
        onClick={props.selectDieOnHold}
        >
        <h2>{props.value}</h2>
    </div>
    )
}