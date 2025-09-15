import { useState } from "react";

function AddTodo ({onNewItem}) {

  const [todoName, setTodoName] = useState();
  const [deuDate, setdeuDate] = useState();

  const handleAddTodoName = (e) =>{
    // console.log(e.target.value);  
    setTodoName(e.target.value);
  }
  const handleAddDeuDate = (e) =>{
    // console.log(e.target.value);  
    setdeuDate(e.target.value);
  }

  const handleClickAddBtn = () =>{
    if(todoName.length>0 && deuDate.length>0){   
      onNewItem(todoName, deuDate);
      setTodoName('');
      setdeuDate(''); 
    }    
  }

  return <>
    <div class="container" style={{'textAlign':"left"}}>
      <div class="row kar-row">
        <div class="col-sm-6"> 
          <input 
            type="text" 
            value={todoName} 
            placeholder="Enter Todo Here" 
            onChange={handleAddTodoName}
            required
          />
        </div>
        <div class="col-sm-4">
          <input 
            type="date" 
            value={deuDate} 
            onChange={handleAddDeuDate}
            required
          />
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success kar-button" onClick={handleClickAddBtn}>Add</button>
        </div>
      </div>
    </div>
  </>
}

export default AddTodo;