const Item = ({Item, bought, handleOnClick}) =>{
  
  console.log("bought",bought);
  

  return (
    <>
      <li className={`list-group-item ${bought && 'active'}`}>
        <span>{Item}</span>
        <button type="button" className="btn btn-info button" onClick={handleOnClick}>Buy</button>
      </li>
    </>
  );
};

export default Item;