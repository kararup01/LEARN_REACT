import { useRef, useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo ({onNewItem}) {

  const todoNameElement = useRef();
  const deuDateElement = useRef();

  const handleClickAddBtn = (event) =>{
    event.preventDefault();
      
    let todoName = todoNameElement.current.value;
    let deuDate = deuDateElement.current.value;
    todoNameElement.current.value = '';
    deuDateElement.current.value = '';
    onNewItem(todoName, deuDate);
  }

  return <>
    <div class="container" style={{'textAlign':"left"}}>
      <form class="row kar-row" onSubmit={handleClickAddBtn} >
        <div class="col-sm-6"> 
          <input 
            type="text" 
            placeholder="Enter Todo Here" 
            ref={todoNameElement}
            required
          />
        </div>
        <div class="col-sm-4">
          <input 
            type="date" 
            ref={deuDateElement}
            required
          />
        </div>
        <div class="col-sm-2">
          <button 
            class="btn btn-success kar-button" 
          >
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  </>
}

export default AddTodo;