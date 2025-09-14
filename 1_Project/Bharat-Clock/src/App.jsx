import ClockHeading from './component/ClockHeading';
import ClockSlogan from './component/ClockSlogan';
import CurrentTime from './component/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return <center>
    <ClockHeading />
    <ClockSlogan />
    <CurrentTime />
  </center>
}

export default App
