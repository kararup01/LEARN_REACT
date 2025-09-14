import AddTodo from './component/AddTodo';
import AppName from './component/AppName';
import TodoItems from './component/TodoItems';
import './App.css';
  
function App() {

  let todoItems = [
    {name: "Buy Milk",
     deuDate : "12/09/2025",
    },
    {name: "Go to school",
     deuDate : "12/09/2025",
    },
    {name: "Learn react",
     deuDate : "12/09/2025",
    }
  ];

  return (
    <center className = "todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
    </center>
  );
};

export default App;
