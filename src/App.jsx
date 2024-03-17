import { useState } from 'react'
import {nanoid} from 'nanoid'
import './App.css'
import Die from "./assets/components/Die"

function App() {

  const [newDice, setNewDice] = useState(getNewDice())
  
  function createNewDiceSet(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function getNewDice(){
    const newDiceSet = []
    for (let i = 0; i < 10; i++) {
      newDiceSet.push(createNewDiceSet())
      }
    return newDiceSet
  }
  
  function rollDice() {
    setNewDice(oldDice => oldDice.map(dieToBeSkipped => {
      return dieToBeSkipped.isHeld === true ? dieToBeSkipped : createNewDiceSet()
  }))
    }

  function selectDieOnHold(id) {
    setNewDice(oldDice => oldDice.map(selectedDie => {
      return selectedDie.id === id ? { ...selectedDie, isHeld: !selectedDie.isHeld } : selectedDie
    }))
  
  }

  const diceElements = newDice.map(singleDie => (
    <Die
      value={singleDie.value}
      key={singleDie.id} 
      isHeld={singleDie.isHeld}
      selectDieOnHold={() => selectDieOnHold(singleDie.id)}
      />
      ))
      
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
