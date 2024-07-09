import { useState, useEffect } from "react";
import "../Todo/Todo.css";
import TodoForm from "./TodoForm";
import { TodoList } from "./TodoList";
import DataAndTime from "./DataAndTime";
import { getLocalStorageTodoData,
  setLocalStorageTodoData } from "./TodoLocalStorage";

export const Todo = () => {

 

  const [inputVal, setInputVal] = useState();

  const [task, setTask] = useState(()=>getLocalStorageTodoData()); //ye sare tasks vegera store krne ke liye , isliye iska usestate mene array rakha hai
  //? idhr local storage me add kr diya

  const handleFormSubmit = (inputVal) => {
    //=>5th getting from the parent
    const { id, content, checked } = inputVal; // I'd made it as object

    //ab hme isme event pass on ni krna pdega
    // if (!inputVal) return; //we used to earlier when we'd not declared the input as object
    //since we made the inputVal as the object we can pass it as parameters as well
    if (!content) return;

    //when it comes to objects we can't use the .inclues() method
    // if(task.includes(inputVal)) {
    //     setInputVal("");
    //     alert("Already exits bro! Type smthng diff");
    //     return;
    // }; //task to mera ek array hai agar wo pehle hi contain krta hai to use return kr denge

    //now this code is for teh object wali chij
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    //setting the previous tasks as well and storing them using the spread operator and in the last I am getting the inputVal
    // setTask((prevTask)=>[...prevTask,inputVal])//ab isko use ni krenge as an object wali chij use krenge
    setTask((prevTask) => [
      ...prevTask,
      // { id:id,content:content,checked:checked}
      { id, content, checked }, // Can be written this way tooo , Acc to ECMA 2015 since value and keys are same
    ]);
    setInputVal(""); //kaam ho jaane ke baad blank ho jaaye
  };

  //handleinh the delete thing
  const handleDeleteBtn = (e) => {
    console.log(e); //ye jis task pe click rk rhe hain wo out kr rha hai
    console.log(task); //ye pura ka pura task hi log kr rha hai
    const updatedTask = task.filter((currTask) => currTask.content !== e);
    //filter function jo contions hoti hainuske hisab se return krta hai value
    setTask(updatedTask);
  };

  //handling the checked button
  const handleCheckedBtn = (e) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === e) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  //handling the clearAll method
  const handleClearAll = () => {
    setTask([]);
  };

  //TODO for locaL storage to do data
  setLocalStorageTodoData(task);
  // useEffect(() => {
  //     console.log("Updating local storage with tasks:", task);
  //     localStorage.setItem(todoKey, JSON.stringify(task));
  // }, [task]); // Update local storage whenever 'task' changes

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DataAndTime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />
      {/*1st me (parent) passing on addtodo as prop to child  */}

      <section className="myUnOrdList">
        <ul>
          {task.map((currTask, index) => {
            // return <TodoList key={index}
            return (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onHandleDeleteTodo={handleDeleteBtn}
                onHandleCheckedTodo={handleCheckedBtn}
              />
            );
          })}
        </ul>
      </section>

      <section className="clear-btn" onClick={handleClearAll}>
        Clear All
      </section>
    </section>
  );
};
