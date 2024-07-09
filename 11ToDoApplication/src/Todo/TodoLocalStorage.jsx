
const todoKey = "reactTodo";
export  const getLocalStorageTodoData=()=>{
    //now making the local storage to save my initial data
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return []; //in case data ni hai jo ki hain starting me local storage  me koi data stored ni hai
    console.log("Initial load from local storage:", rawTodos);
    return JSON.parse(rawTodos);
};
export  const setLocalStorageTodoData=(task)=>{
    //Add data to  local storage
  return localStorage.setItem(todoKey, JSON.stringify(task));
  //coz setItems takes data in form of string

};


