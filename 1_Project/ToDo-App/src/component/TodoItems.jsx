import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, onDeleteClick}) => {

  return (
    <>
      <div className='item-container'>
        {todoItems.map((item) =>(
          <TodoItem todoName={item.name} todoDate={item.deuDate} onDeleteClick={onDeleteClick}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;