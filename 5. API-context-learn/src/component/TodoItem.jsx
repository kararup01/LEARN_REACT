import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/Todo-Item-Store"

const TodoItem = ({todoName, todoDate}) => {
    const {deleteTodoItem} = useContext(TodoItemContext);


  return (
    <>
      <div class="container">
        <div class="row kar-row">
          <div class="col-sm-6">{todoName}</div>
          <div class="col-sm-4">{todoDate}</div>
          <div class="col-sm-2">
            <button 
              type="button" 
              class="btn btn-danger kar-button" 
              onClick={()=>deleteTodoItem(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;