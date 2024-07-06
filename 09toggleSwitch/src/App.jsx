import { useState } from 'react'
import './App.css'

function App() {
  const [isOn,setIsOn] = useState(false);
  const handleToggleSwitch=()=>{
    setIsOn(!isOn);
  }

  const checkIsOn=isOn?"on":"off";

  return (
    <>
      <div className='toggle-switch'
      style={{backgroundColor:isOn?"#4caf50":" #f44336"}} 
      onClick={handleToggleSwitch}>
      <div className ={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div> 
      </div>
        
    </>
  )
}

export default App
