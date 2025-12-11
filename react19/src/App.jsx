import './App.css'
import Button from './component/Button'
import { Greeting } from './component/Greeting'
import { Hello, HelloWithoutJsx } from './component/Hello'
import { Product } from './component/Product'
import { UserCard } from './component/UserInfo'
import { Welcome } from './component/Welcome'

function App() {
  return (
    <>
      <UserCard name="Bruce" age="33" city="Gotham" email="batman@gmail.com"/>
      <Greeting name="Bruce" message="Good Morning"/>
      <Greeting name="Clark"/>
      <Greeting message="Welcome"/>
      <Greeting />

      <Product title="Gaming Laptop" price={3343} inStock={true} category={["electronics", "Computes", "Gaming"]}/>
      <Welcome name="Bruce" alias="Batman"/>
      <Welcome name="Clark" alias="Superman"/>
      <Welcome name="Tony" alias="Ironman" />
      <Welcome />
      <Welcome />
      <Button />
      <Hello />
      <HelloWithoutJsx />
    </>
  )
}

export default App
