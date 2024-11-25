import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  function addValue() { 
    if (counter < 20) {
      setCounter( prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 2);
      setCounter(prevCounter => prevCounter + 3);
      setCounter(prevCounter => prevCounter + 4);
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>PumbCode</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} >Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>
        footer: {counter}
      </p>
    </>
  )
}

export default App
