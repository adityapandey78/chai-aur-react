import React from 'react'
import { useState } from 'react';  

function TodoForm({onAddTodo}) { // =>2nd(getting the prop) on add to ko as a props pass kra hai mene parent se
    const [inputVal,setInputVal]=useState({}) //keeping the usestate as object in order to get required keys , id and value of setInputVal method

    const handleInputeChange=(value)=>{
        setInputVal({id:value,content:value,checked:false}); //uska input value set kiya mene
    };
    
    const handleFormSubmit=(event)=>{


        //=>4th thhis function working a
        event.preventDefault();
        onAddTodo(inputVal); //taking input val in the prop to check all conditons and passing to the parent
        setInputVal({id:"",content:"",checked:""});  //onAddTodo ko as a prop le liya mene and ye uska child hai to parent se fetch krega
    };
    return (
    <section className="form">
                <form onSubmit={handleFormSubmit /*  =>3rd triggering this function*/}>
                    <div id='todo-div'>
                        <input type="text" className="todo-input"  autoComplete="off"
                        value={inputVal.content}
                        onChange={(event)=>handleInputeChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
  )
}

export default TodoForm