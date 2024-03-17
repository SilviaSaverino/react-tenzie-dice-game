import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
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
      console.log("you win")
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
      <div className='info'>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. </p>
        <p className="instructions"> Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='die-container'>
        {diceElements}
      </div>
      <button className="roll-dice-btn" onClick={rollDice}>Roll Dice</button>
    </main>
  )
}

export default App
