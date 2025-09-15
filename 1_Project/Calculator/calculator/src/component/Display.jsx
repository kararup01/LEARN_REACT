import style from'./Display.module.css';

const Display = ({displayCalVal}) =>{
  return(
    <>
      <input 
        type="text" 
        placeholder="0" 
        className={style.textContainer}
        value={displayCalVal}
        readOnly
      />
    </>
  );
} ;

export default Display;