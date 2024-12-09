import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef = to pick value of input field
  const passwordRef = useRef(null);

  // used callback to optimize the passwordGenerator and use cache
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += '0123456789';
    }
    if (characterAllowed) {
      str += '!@#$%^&*()_+';
    }

    for (let index = 0; index < length; index++) {
      let charIndex = Math.floor((Math.random() * str.length + 1));
      pass += str.charAt(charIndex);
    }
    setPassword(pass)
    
  }, [
    length, numberAllowed, characterAllowed, setPassword
  ]);

  const copyPasswordToClipBoard = useCallback(() => {

    // to select the current password value
    passwordRef.current?.select();
    
    // to copy value to clipboard
    window.navigator.clipboard.writeText(password)
  }, [password]);

  // useEffect: to run password generator
  useEffect(() => {
    passwordGenerator()
  }, [
    length, characterAllowed, numberAllowed, passwordGenerator
  ]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-10 px-4 py-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard}
            className='text-white bg-orange-600 px-3 py-0.5 outline-none w-full hover:bg-slate-900'>
              copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {setCharacterAllowed((prev) => !prev)}}
            />
            <label>Sp. Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
