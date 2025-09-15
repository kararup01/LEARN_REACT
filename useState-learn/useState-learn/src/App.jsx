import Input from './component/Input'
import ItemsContainer from './component/ItemsContainer'
import Container from './component/Container'
import './App.css'
import { useState } from 'react';

function App() {
  // const items = ['Dal', 'Rice', 'Apple', 'Banana', 'Vegetable',]   

  let [items, setItems] = useState(['Dal', 'Rice', 'Apple']);

  // console.log("val--",textShow);
  // console.log(textStateArr);

  const onKeyDown = (event) =>{
    // console.log(event);
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      let newItems = [...items, newFoodItem];
      setItems(newItems);
      event.target.value="";
    }   
  }

  return (
    <>
      <Container>
        <h1>Food Item</h1>
        <Input handleOnKeyDown={onKeyDown}/>
        <ItemsContainer foodItems={items}/>
      </Container>
    </>
  )
}

export default App
