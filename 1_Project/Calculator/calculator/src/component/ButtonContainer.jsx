import style from './ButtonContainer.module.css'

const ButtonContainer = ({btnText}) =>{

  const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];  

  return(
    <>
     <div className={style.buttonsContainer}>
        {buttons.map((button) =>(
          <button className={style.button} onClick={()=>btnText(button)}>{button}</button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;