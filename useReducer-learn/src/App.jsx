import AddTodo from './component/AddTodo';
import AppName from './component/AppName';
import TodoItems from './component/TodoItems';
import WelcomeMassage from './component/WelcomeMassage';
import TodoItemContextProvider from './store/Todo-Item-Store';
import './App.css'; 

function App() {
 
  return (
    <TodoItemContextProvider>
      <center className = "todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMassage />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
};

export default App;
