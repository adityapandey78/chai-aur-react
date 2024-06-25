import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObject={
    username:'Aditya',
    age:22
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>tailwind test</h1>
      <Card channel="chaiAurcode" someObj={myObject}  />
      <Card username="Aditya" />

    </>
  )
}

export default App
