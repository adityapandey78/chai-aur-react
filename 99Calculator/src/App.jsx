import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [res, setRes] = useState(0)
  const [operation, setOperation] = useState("+")
  const operations = ['+', '-', '*', '/'];

  useEffect(() => {
    let result = 0
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    switch (operation) {
      case '+':
        result = n1 + n2
        break
      case '-':
        result = n1 - n2
        break
      case '*':
        result = n1 * n2
        break
      case '/':
        result = n1 / n2
        break
      default:
        break
    }
    setRes(result)
  }, [num1, num2, operation])

  return (
    <>
      <h1>Calculator</h1>
      <div className='Calculator'>
        <input 
          type="number"
          className='inputbox1'
          value={num1}
          placeholder='1st Number'
          onChange={(e) => setNum1(e.target.value)}
        />

        <select 
          name="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          {operations.map(op => (
            <option value={op} key={op}>{op}</option>
          ))}
        </select>

        <input 
          type="number"
          className='inputbox2'
          value={num2}
          placeholder='2nd Number'
          onChange={(e) => setNum2(e.target.value)}
        />
        
        {res !== null && <div className='result'>Result: {res}</div>}
      </div>
    </>
  )
}

export default App
