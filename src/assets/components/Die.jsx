import React from "react"

export default function Die(props){
    return (
        <div className="single-die">
            <h2>{props.value}</h2>
        </div>
    )
}