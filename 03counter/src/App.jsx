import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=5;

  //idhr khud ke var se increase to hoga but wo UI me reflect nahi hoga
  //so wo krne ke liye Hooks use krna pdta hai

  let [counter,setCounter]=useState(5)//iski default value mene ye rakh di
  //initially kuchh bhi rakh skte hain "","Aditya", true,false etct etc

  let[text,setText]=useState('')
  const addValue=()=>{
    //console.log('Value Added',counter);
    //counter+=1;
    /*Idhr counter toh badhega but UI me update ni hoga
    Coz React controls the Counter*/

    //so ab hooks use krke kr rhe hain
    if(counter>=20){
      setText("Can't be greater than 20")
    }
    else{
      setCounter(counter+1);
      console.log('Value Added',counter);
      setText("Keep Going")
    }
  }

  const decreaseValue=()=>{
    if(counter<=0){
      setText("Can't be lesss than 0")
    }
    else{
      
      setCounter(counter-1)
      setText("Keep Going")
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value:{counter}</h2>

      
      <button onClick={addValue}>Increase Value {counter}</button>
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
      <br />
      <h2>{text}</h2>

    </>
  )
}

export default App
