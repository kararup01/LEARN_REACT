import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo ({onNewItem}) {

  const [todoName, setTodoName] = useState('');
  const [deuDate, setdeuDate] = useState('');

  const handleAddTodoName = (e) =>{
    // console.log(e.target.value);  
    setTodoName(e.target.value);
  }
  const handleAddDeuDate = (e) =>{
    // console.log(e.target.value);  
    setdeuDate(e.target.value);
  }

  const handleClickAddBtn = (event) =>{
      event.preventDefault();
      onNewItem(todoName, deuDate);
      setTodoName('');
      setdeuDate('');     
  }

  return <>
    <div class="container" style={{'textAlign':"left"}}>
      <form class="row kar-row" onSubmit={handleClickAddBtn} >
        <div class="col-sm-6"> 
          <input 
            type="text" 
            value={todoName} 
            placeholder="Enter Todo Here" 
            onChange={handleAddTodoName}
          />
        </div>
        <div class="col-sm-4">
          <input 
            type="date" 
            value={deuDate} 
            onChange={handleAddDeuDate}
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