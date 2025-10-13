import AddTodo from './component/AddTodo';
import AppName from './component/AppName';
import TodoItems from './component/TodoItems';
import WelcomeMassage from './component/WelcomeMassage';
import { useState } from 'react';
import { TodoItemContext } from './store/Todo-Item-Store';
import './App.css'; 

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewTodoItem = (todoName, deuDate) =>{
    // console.log(`todo item is: ${todoName} and deudate: ${deuDate}`); 
    let newTodoItem = [...todoItems, {name:todoName, deuDate:deuDate}];
    setTodoItems(newTodoItem);   
  }

  const deleteTodoItem = (todoName) =>{
    // console.log(todoName);
    let  newTodoItem  =  todoItems.filter((item)=> item.name !== todoName);
    setTodoItems(newTodoItem);
  }
 
  return (
    <TodoItemContext.Provider 
      value={{
        todoItems,
        addNewTodoItem,
        deleteTodoItem,
      }}
    >
      <center className = "todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMassage />
        <TodoItems />
      </center>
    </TodoItemContext.Provider>
  );
};

export default App;
