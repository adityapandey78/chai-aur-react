import { useState } from "react"


function App() {
  const[color, setColor]=useState("grey")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-1 rounded-xl p-2">
         <button onClick={()=>setColor("red")}
         className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

         <button onClick={()=>setColor("green")} 
         className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

         <button onClick={()=>setColor("blue")}
          className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

         <button onClick={()=>setColor("magenta")}
         className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"magenta"}}>Magenta</button>

         <button onClick={()=>setColor("pink")}
          className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>

         <button onClick={()=>setColor("orange")}
         className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>

         <button onClick={()=>setColor("black")}
         className="outline-none px-2 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>

         <button onClick={()=>setColor("white")}
         className="outline-none px-2 py-2 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>White</button>

         <button onClick={()=>setColor("yellow")}
         className="outline-none px-2 py-2 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
