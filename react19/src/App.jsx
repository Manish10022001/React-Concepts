import './App.css'
import Button from './component/Button'
import { CardWrapper } from './component/CardWrapper'
import { Greeting } from './component/Greeting'
import { Hello, HelloWithoutJsx } from './component/Hello'
import { Product } from './component/Product'
import { UserCard } from './component/UserInfo'
import { Welcome } from './component/Welcome'
import { UserDetails } from './conditionalRendering/UserDetails'
import { Counter } from './Hooks/useState/Counter'
import { LoginCard } from './Hooks/useState/LoginCard'
import { SimpleCounter } from './Hooks/useState/SimpleCounter'

function App() {
  return (
    <>
      <SimpleCounter />
      <Counter />
      <LoginCard />

      <UserDetails name="Bruce" isOnline={true}/>
      <UserDetails name="Clark" isOnline={false} hideOffline={true}/>

      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@gmail.com</p>
        <Button>Edit Profile</Button>
      </CardWrapper>
      
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
