import Item from "./Item";

const ItemsContainer = () =>{
 
  const items = ['Dal', 'Rice', 'Apple', 'Banana', 'Vegetable',]
  return (
    <>
      <ul class="list-group">
        {items.map((item)=>(
          <Item Item={item}/>
        ))}
      </ul>
    </>
  )
};

export default ItemsContainer;