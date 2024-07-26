import {React, useState} from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault();
        if(!todo) return;

        // addTodo({id:Date.now(),todo:todo,completed:false})
        //isse ek object add kr rhe hain saare data me
        //but udhr app.jsx me humne alreayd likha hai addtodo ka funn and id ke liye whn date.now likh rakhi hai
        //so more optimised code

        addTodo({todo,completed:false});
        //since field ka naam and value ka name same hai to bs ek hi likhte hain as per new syntax

        setTodo("")//iske baad iski value empty kr di
        

    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;