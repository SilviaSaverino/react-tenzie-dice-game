import { useState } from 'react'
import './App.css'
import Die from "./assets/components/Die"

function App() {
  
  return (
    <main>
      <div className='die-container'>
        <Die />
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