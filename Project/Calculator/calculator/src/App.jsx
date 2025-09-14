import style from'./App.module.css';
import ButtonContainer from './component/ButtonContainer';
import Display from './component/Display';

function App() {

  return (
    <>
      <center>
        <h1>Calculator</h1>
        <div className={style.calculator}>
          <Display />
          <ButtonContainer/>
        </div>
      </center>
    </>
  )
}

export default App
