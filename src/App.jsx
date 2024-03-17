import Die from "./assets/components/Die"

function App() {

  const [newDice, setNewDice] = useState(getNewDice())
  
  function getNewDice(){
    const newDiceSet = []
    for(let i = 0;i < 10; i++){
      newDiceSet.push(Math.ceil(Math.random() * 6))
    }
    return newDiceSet
  }
 
  console.log(getNewDice())

  const diceElements = newDice.map(singleDie => <Die value={singleDie} />)
  return (
    <main>
      <div className='die-container'>
        {diceElements}  
      </div>
    </main>
  )
}

export default App
