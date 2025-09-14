import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {

  return (
    <>
      <div className='item-container'>
        {todoItems.map((item) =>(
          <TodoItem todoName={item.name} todoDate={item.deuDate}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;