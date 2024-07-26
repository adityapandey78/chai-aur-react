import {createContext,useContext} from "react"
export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Todo Message",
            completed:false,
        }
    ],
    //upar ki toh ho gyi prooperties and now we weill write the funcationalities
    //hum bs unka naam likhenge yhn i.e. def.
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
    //upar humne context me kya kya methpds hain and kyakya values hain unhe decide kiya hai 
})





export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider;