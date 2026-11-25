import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <h1 style={{ color: 'rgb(110, 53, 117)', fontSize: '35px' ,textAlign: 'center'}}>Welcome to Vite + React</h1>
      <p className="text-center">This is a simple React application built with Vite.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        count 
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Submit
      </button>
    </>
  )
}

export default App