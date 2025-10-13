import style from './Container.module.css'

const container = (props) =>{
  
  return(
    <>
      <div className={style.container}>{props.children}</div>
    </>
  );
};

export default container;