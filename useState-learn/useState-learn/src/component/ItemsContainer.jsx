import { useState } from "react";
import Item from "./Item";

const ItemsContainer = ({foodItems}) =>{
  
  let [activeItems, setActiveItems] = useState([]);

  const handleOnClick = (item) =>{
    // console.log(`Buy- ${item}`);
    let newItems = [...activeItems, item];
    setActiveItems(newItems);  
  }

  return (
    <>
      <ul class="list-group">
        {foodItems.map((item)=>(
          <Item 
            key={item} 
            Item={item} 
            handleOnClick={()=>handleOnClick(item)} 
            bought={activeItems.includes(item)}
          />
        ))}
      </ul>
    </>
  )
};

export default ItemsContainer;