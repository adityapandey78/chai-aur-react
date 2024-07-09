import { useState } from "react"
import "../Todo/Todo.css"
import TodoForm from "./TodoForm";
import { TodoList } from "./TodoList";
import DataAndTime from "./DataAndTime";

export const Todo=()=>{

    const [inputVal,setInputVal]=useState("")
    const [task,setTask]=useState([]); //ye sare tasks vegera store krne ke liye , isliye iska usestate mene array rakha hai
    
    

    const handleFormSubmit=(inputVal)=>{ //=>5th getting from the parent 
        //ab hme isme event pass on ni krna pdega
        if (!inputVal) return;
        if(task.includes(inputVal)) {
            setInputVal("");
            alert("Already exits bro! Type smthng diff");
            return;
        }; //task to mera ek array hai agar wo pehle hi contain krta hai to use return kr denge


        //setting the previous tasks as well and storing them using the spread operator and in the last I am getting the inputVal 
        setTask((prevTask)=>[...prevTask,inputVal])
        setInputVal(""); //kaam ho jaane ke baad blank ho jaaye
    };

    

    const handleDeleteBtn=(e)=>{
        console.log(e);//ye jis task pe click rk rhe hain wo out kr rha hai 
        console.log(task);//ye pura ka pura task hi log kr rha hai
        const updatedTask=task.filter((currTask)=>currTask!==e)
        //filter function jo contions hoti hainuske hisab se return krta hai value
        setTask(updatedTask)

    }
    
    const handleClearAll=()=>{
        setTask([])
    }
    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <DataAndTime/>    
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />
            {/*1st me (parent) passing on addtodo as prop to child  */}

            <section className="myUnOrdList">
            <ul>
                {
                    task.map((currTask,index)=>{
                        return <TodoList key={index} 
                        data={currTask}
                        onHandleDeleteTodo={handleDeleteBtn}
                        />; 
                    })
                }
            </ul>
            </section>
            
            <section className="clear-btn"
            onClick={handleClearAll}
            >
            Clear All  
            </section>
        
        </section>

    )
}