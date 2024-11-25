import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  var firstVideo = {
    title: "Leaning React Day 6",
    image: "react-day-6.png",
    description: "This is day 6 of learning react",
    price: "100"
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl' >PumbCode Zindabad!</h1>
      <Card video={firstVideo} text="Random Text"/>
      <Card/>
    </>
  )
}

export default App
