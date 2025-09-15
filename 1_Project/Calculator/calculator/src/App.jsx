import { useState } from 'react';
import style from'./App.module.css';
import ButtonContainer from './component/ButtonContainer';
import Display from './component/Display';

function App() {

  const [calVal, setCalVal] = useState('');

  const handleBtnClick = (button) =>{
    // console.log(button);
    if(button === "=") {
      let newResult = eval(calVal);
      setCalVal(newResult);
    } else if (button === "C") {
      setCalVal('');
    } else {
      let newDisplayVal = calVal + button;
      setCalVal(newDisplayVal);
    }
  }

  return (
    <>
      <center>
        <h1>Calculator</h1>
        <div className={style.calculator}>
          <Display displayCalVal={calVal} />
          <ButtonContainer btnText={handleBtnClick}/>
        </div>
      </center>
    </>
  )
}

export default App
