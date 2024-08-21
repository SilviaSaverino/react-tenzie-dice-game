import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"
import './App.css'
import Die from "./assets/components/Die"

function App() {

  const [newDice, setNewDice] = useState(getNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=> {
    const diceSetAllHeld = newDice.every(die => die.isHeld)
    const firstValue = newDice[0]. value
    const allDiceWithSameValue = newDice.every(die => die.value)

    if (diceSetAllHeld && allDiceWithSameValue){
      setTenzies(true)
    }
  }, [newDice])


  function createNewDiceSet() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function getNewDice() {
    const newDiceSet = []
    for (let i = 0; i < 10; i++) {
      newDiceSet.push(createNewDiceSet())
    }
    return newDiceSet
  }

  function rollDice() {
    if(!tenzies){
      setNewDice(oldDice => oldDice.map(dieToBeSkipped => {
        return dieToBeSkipped.isHeld === true ? dieToBeSkipped : createNewDiceSet()
      }))
    } else {
      setTenzies(false)
      setNewDice(getNewDice())
    }
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
      {tenzies && <Confetti />}
      <div className='info'>
        <h1 className="title">{tenzies ? "TENZIE!" : "Tenzies" }</h1>
        <p className="instructions">{tenzies ? "Congrats, you won!" : "Roll until all dice are the same." } </p>
        <p className="instructions">{tenzies ? "" : "Click each die to freeze it at its current value between rolls." } </p>
      </div>
      <div className='die-container'>
        {diceElements}
      </div>
      <button className="roll-dice-btn" onClick={rollDice}>
      {tenzies ? "New Game" : "Roll Dice"}
      </button>
    </main>
  )
}

export default App
