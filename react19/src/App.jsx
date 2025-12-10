import './App.css'
import Button from './component/Button'
import { Hello, HelloWithoutJsx } from './component/Hello'
import { Welcome } from './component/Welcome'

function App() {
  return (
    <>
      <Welcome />
      <Button />
      <Hello />
      <HelloWithoutJsx />
    </>
  )
}

export default App
