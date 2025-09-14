import Input from './component/Input'
import ItemsContainer from './component/ItemsContainer'
import Container from './component/Container'
import './App.css'

function App() {

  return (
    <>
      <Container>
        <h1>Food Item</h1>
        <Input />
        <ItemsContainer />
      </Container>
    </>
  )
}

export default App
