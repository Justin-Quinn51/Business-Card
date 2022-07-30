import { useState } from 'react'
import React from "react"
import './App.css'
import Headshot from './components/Headshot'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Headshot />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
