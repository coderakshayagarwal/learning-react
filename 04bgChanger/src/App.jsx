import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white'
              onClick={() => setColor("red")}
              style={{backgroundColor: "red"}}>
              Red
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white'
              onClick={() => setColor("green")}
              style={{backgroundColor: "green"}}>
              Green
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white'
              onClick={() => setColor("blue")}
              style={{backgroundColor: "blue"}}>
              Blue
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white'
              onClick={() => setColor("yellow")}
              style={{backgroundColor: "yellow"}}>
              Yellow
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
