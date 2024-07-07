import { useEffect, useState } from "react"
import "../Todo/Todo.css"
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Todo=()=>{

    const [inputVal,setInputVal]=useState()
    const [task,setTask]=useState([]); //ye sare tasks vegera store krne ke liye , isliye iska usestate mene array rakha hai
    const [dateTime,setDateTime]=useState()

    const handleInputeChange=(value)=>{
        setInputVal(value); //uska input value set kiya mene
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
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

    //date and time
    //useeffect use kra taaki memory leak na ho
    useEffect(()=>{
        const interval=setInterval(() => {
            let now= new Date();
            let formattedDate= now.toLocaleDateString();
            let formattedTime= now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`)
        }, 1000);
        return()=> clearInterval(interval); //ye interval clear kr dega and meomory leak ni hoga iske wejeh se
    },[])

    const handleDeleteBtn=(e)=>{
        console.log(e);//ye jis task pe click rk rhe hain wo out kr rha hai 
        console.log(task);//ye pura ka pura task hi log kr rha hai
        const updatedTask=task.filter((currTask)=>currTask!==e)
        //filter function jo contions hoti hainuske hisab se return krta hai value
        setTask(updatedTask)

    }
    const handleCheckBtn=()=>{

    }
    const handleClearAll=()=>{
        setTask([])
    }
    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time" >{dateTime} </h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off"
                        value={inputVal}
                        onChange={(event)=>handleInputeChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
            <ul>
                {
                    task.map((currTask,index)=>{
                        return <li className="todo-item" key={index}>
                            <span>{currTask}</span> 
                            {/* //har list ka current task definekr rkha hai */}
                            <button> 
                                <FaCheckCircle className="check-btn"
                                onClick={handleCheckBtn} 
                                />
                            </button>    
                            <button>
                                <MdDeleteForever className="delete-btn"
                                onClick={()=>handleDeleteBtn(currTask)}
                                />
                            </button>
                        </li>
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