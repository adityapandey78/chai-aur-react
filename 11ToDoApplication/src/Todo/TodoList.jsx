import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList=({key, data,onHandleDeleteTodo})=>{
return(
    <li className="todo-item" key={key}>
        <span>{data}</span> 
        {/* //har list ka current task definekr rkha hai */}
        <button> 
            <FaCheckCircle className="check-btn" />
        </button>    
        <button>
            <MdDeleteForever className="delete-btn"
            onClick={()=>onHandleDeleteTodo(data)}
            />
        </button>
    </li>
    );  
};