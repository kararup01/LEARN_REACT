import style from './Input.module.css'

const Input = () =>{
  return(
    <>
      <input type='text' placeholder='Enter Food Item' className={style.textContainer}></input>
    </>
  )
};

export default Input;