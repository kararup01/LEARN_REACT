import { useContext } from "react";
import { TodoItemContext } from "../store/Todo-Item-Store"
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemContext);

  return (
    <>
      <div className='item-container'>
        {todoItems.map((item) =>(
          <TodoItem key={item.name} todoName={item.name} todoDate={item.deuDate}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;