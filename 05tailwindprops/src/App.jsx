import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObject={
    username:'Aditya',
    age:22
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>tailwind test</h1>
      <Card username="chaiaurcode" btnTxt="click me"  className='mb-10'/>
      <Card username="Aditya Pandey" btnTxt="Visit me" someObject={myObject} AnotherObj={newArr}/>
      <Card/>
      
    </>
  )
}

export default App
/*
 props pass krne ke liye ese hi krte haim 
  upr mene object declare kiya hai
*/