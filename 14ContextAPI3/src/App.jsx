import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([])


  const addTodo=(newtodo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...newtodo}]) 
    /*addTodo me agar setTodos krenge to ye to purana state ka data erasekr dega, so to use the new data we have to preserve old by spearead operator and new object(i.e. todo)
    since todo ek hai to use string ki tarah toh le ni skta , hence use 
    destructure kr diya and as id time le li and baaki ka data sperad operator ki help se */
  }

  const updateTodo=(newId,newTodo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===newId ? newTodo:prevTodo)));
    /*
    update krne se pehle  purana data dekh rhe hain agar purane data se match kr gya toh newTodo set ho jaayega else purana hi rhega
    */
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    /*Ye filter kr le rha hai jo id match kr lega use chhod dega and baaki to rehne dega whi */
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo===id?{...prevTodo, completed:!prevTodo.co} :prevTodo))
  }

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
