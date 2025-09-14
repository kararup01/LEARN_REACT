function AddTodo () {
  return <>
    <div class="container" style={{'textAlign':"left"}}>
      <div class="row kar-row">
        <div class="col-sm-6"> 
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-sm-4">
          <input type="date"></input>
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success kar-button">Add</button>
        </div>
      </div>
    </div>
  </>
}

export default AddTodo;