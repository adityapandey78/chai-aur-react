import { createSlice , nanoid } from "@reduxjs/toolkit";
//createReducer ko hi slice bolte hain hum  @Notes.md
//nanoid : sbko ek unique id deti hai , basically an Id Managemnet hook

//! Initial state bhi ek object hi leta hai

const initialState= {
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //isme ek Id hoti hai and fir uski functionality hoti hai
        //: addtodo
        // name ho gya and then uska function
        // state:defines it's state and action does the action

        addTodo:(state,action)=>{
           const todo={
            id: nanoid(), //it will give its ID
            text: action.payload //payload khud ek object bhihai
           }
           state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload) //toh ye filter out krke ye put kr dega same object me hi mtlb use hta dega
            //id leke find krega 
        },
    }

})

export const{addTodo,removeTodo}= todoSlice.actions; 
//upr me todoslice ke saare functionalities ko bhi export krenge
//individual reducres ko bhi export krna pdega kyuki wo components me kaam aayenge
// and todoslice.reducer ko bhi krenge export store ke paas ise register krayenge taaki actions vegera update kr ske ye
export default todoSlice.reducer;