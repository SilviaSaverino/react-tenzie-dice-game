import { useState } from 'react'
import './App.css'
import Die from "./assets/components/Die"

function App() {

  const [newDice, setNewDice] = useState(getNewDice())
  
  function getNewDice(){
    const newDiceSet = []
    for(let i = 0;i < 10; i++){
        newDiceSet.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false})
    }
    return newDiceSet
  }
 
  function rollDice(){
    setNewDice(getNewDice())
  }

  const diceElements = newDice.map(singleDie => <Die value={singleDie.value}/>)
  return (
    <main>
      <div className='die-container'>
        {diceElements}  
      </div>
      <button className="roll-dice-btn" onClick={rollDice}>Roll Dice</button>
    </main>
  )
}

export default App
