const Item = ({Item}) =>{
  return (
    <>
      <li className="list-group-item">
        <span>{Item}</span>
        <button type="button" className="btn btn-info button">Buy</button>
      </li>
    </>
  );
};

export default Item;