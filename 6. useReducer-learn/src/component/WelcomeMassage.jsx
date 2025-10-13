import style from './WelcomeMassage.module.css'
import { TodoItemContext } from "../store/Todo-Item-Store"
import { useContext } from "react";

const WelcomeMassage = () =>{
  const {todoItems} = useContext(TodoItemContext);  
  

  return todoItems.length === 0 && <div className={style.welcome}>----Enjoy Your Day----</div>
}

export default WelcomeMassage;