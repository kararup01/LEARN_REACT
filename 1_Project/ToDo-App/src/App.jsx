import AddTodo from './component/AddTodo';
import AppName from './component/AppName';
import TodoItems from './component/TodoItems';
import WelcomeMassage from './component/WelcomeMassage';
import { useState } from 'react';
import './App.css'; 

function App() {

  // let initialTodoItems = [
  //   {name: "Buy Milk",
  //    deuDate : "12/09/2025",
  //   },
  //   {name: "Go to school",
  //    deuDate : "12/09/2025",
  //   },
  //   {name: "Learn react",
  //    deuDate : "12/09/2025",
  //   }
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodoItem = (todoName, deuDate) =>{
    // console.log(`todo item is: ${todoName} and deudate: ${deuDate}`); 
    let newTodoItem = [...todoItems, {name:todoName, deuDate:deuDate}];
    setTodoItems(newTodoItem);   
  }

  const handleDeleteItem = (todoName) =>{
    // console.log(todoName);
    let  newTodoItem  =  todoItems.filter((item)=> item.name !== todoName);
    setTodoItems(newTodoItem);
  }

  return (
    <center className = "todo-container">
      <AppName />
      <AddTodo onNewItem={handleAddTodoItem}/>
      {todoItems.length === 0 && <WelcomeMassage /> }
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    </center>
  );
};

export default App;
