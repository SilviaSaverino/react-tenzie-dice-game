import { useState } from 'react'
import './App.css'
import Die from "./assets/components/Die"

function App() {
  
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