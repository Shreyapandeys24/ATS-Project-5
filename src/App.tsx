import { useState } from 'react'
import Navbar from "./components/Nav"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
    </>
  )
}

export default App
