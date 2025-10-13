import { createContext } from "react";
import { useReducer } from "react";

const todoItemsReducer = (currTodoItems, action) =>{
  let newTodoItem = currTodoItems;

  if(action.type === "NEW_ITEM"){
    newTodoItem = [...currTodoItems, {name:action.payload.todoName, deuDate:action.payload.deuDate}];
  } else if (action.type === "DELETE_ITEM"){
    newTodoItem  =  currTodoItems.filter((item)=> item.name !== action.payload.todoName);
  }
  return newTodoItem;
}

export const TodoItemContext = createContext({
  todoItems: [],
  addNewTodoItem: () =>{},
  deleteTodoItem: () =>{},
});

const TodoItemContextProvider = ({children}) => {
   
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewTodoItem = (todoName, deuDate) =>{
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        deuDate,
      }
    }; 
    dispatchTodoItems(newItemAction);   
  };

  const deleteTodoItem = (todoName) =>{
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoName,
      }
    }; 
    dispatchTodoItems(newItemAction);
  };

  return (
    <TodoItemContext.Provider 
      value={{
        todoItems,
        addNewTodoItem,
        deleteTodoItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  )
}

export default TodoItemContextProvider;