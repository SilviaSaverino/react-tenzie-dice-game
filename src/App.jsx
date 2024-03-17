import { useState } from 'react'
import './App.css'
import Die from "./assets/components/Die"

function App() {
  
  function getNewDice(){
    const newDiceSet = []
    for(let i = 0;i < 10; i++){
      newDiceSet.push(Math.ceil(Math.random() * 6))
    }
    return newDiceSet
  }
  console.log(getNewDice())
  
  return (
    <main>
      <div className='die-container'>
        <Die value="1"/>
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </div>
    </main>
  )
}

export default App