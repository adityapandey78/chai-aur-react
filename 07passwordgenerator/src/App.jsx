import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const[length,setlength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

//using of useCallback
//useCallback is a React Hook that lets you cache a function definition between re-renders
//https://react.dev/reference/react/useCallback 

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*()_+=-{}:;<>,./?"

    for (let i = 1; i <= length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
     
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
  
  //to call the password generatior function We have to use useEffect hook 
  //useEffect is a React Hook that lets you synchronize a component with an external system.
  // https://react.dev/reference/react/useEffect

  useEffect(()=>{

    passwordGenerator()
  },[length,numberAllowed.charAllowed,passwordGenerator])
//useeffect ki dependencies isliye add kari kyuki isse coode effecient rehta hai


//useRef  Hook
const passwordRef=useRef(null) //paasword ref ka use kr skte hain effect dene ke liye

const copyPassawordToClipboard=useCallback(()=>{
  passwordRef.current?.select() //isse jise select kra tha wop highlight ho jaayega
  passwordRef.current?.setSelectionRange(0,5); //isse bs 5 chars hi select honge
  window.navigator.clipboard.writeText(password)
  
},
[password])


  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 p-1 my-8 text-black text-xl bg-yellow-300'>

      <h1 className='text-4xl text-center text-black mb-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          className='outline-none w-full py-1 px-3'
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef} //isse refrecre de diya useRef hook me use hoga and neeche on-click add kar diya
          />
          <button
           onClick={copyPassawordToClipboard}
           className='text-lg bg-blue-500 p-2 shrink-0'>
            Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
             type="range" 
             min={6}
             max={25}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setlength(e.target.value)}}
             />
             <label htmlFor='numberInput' >Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='charInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
