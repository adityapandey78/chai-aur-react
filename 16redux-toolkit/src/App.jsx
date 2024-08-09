import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Let's Learn about redux Toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )  
}

export default App
