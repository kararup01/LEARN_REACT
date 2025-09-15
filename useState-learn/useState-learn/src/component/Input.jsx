import style from './Input.module.css'

const Input = ({handleOnKeyDown}) =>{

  return(
    <>
      <input 
        type='text' 
        placeholder='Enter Food Item' 
        className={style.textContainer}
        onKeyDown={handleOnKeyDown}
      />
    </>
  )
};

export default Input;