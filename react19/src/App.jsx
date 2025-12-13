import './App.css'
import Button from './component/Button'
import { CardWrapper } from './component/CardWrapper'
import { Greeting } from './component/Greeting'
import { Hello, HelloWithoutJsx } from './component/Hello'
import { Product } from './component/Product'
import { UserCard } from './component/UserInfo'
import { Welcome } from './component/Welcome'
import { UserDetails } from './conditionalRendering/UserDetails'
import { Contact } from './eventHandling/Contact'
import { CustomButtons } from './eventHandling/CustomButtons'
import { Newsletter } from './eventHandling/Newsletteer'
import { ProductList } from './renderingList/ProductList'
import { Alert } from './stylingReactComponent/Alert'
import { Counter } from './Hooks/useState/Counter'
import { LoginCard } from './Hooks/useState/LoginCard'

function App() {
  return (
    <>
      <Contact />
      <Newsletter />
      <CustomButtons text="like"/>
      <CustomButtons text="bookmark"/>
      <Alert>Your changes have been saved</Alert>
      <Alert type="error">Your changes have not been saved</Alert>
      <ProductList />

      <UserDetails name="Bruce" isOnline={true} isPremium={true} isNewUser={true} role="admin"/>
      <UserDetails name="Clark" isOnline={true} hideOffline={true} role="moderator"/>
      <Counter />
      <LoginCard />

      <UserDetails name="Bruce" isOnline={true}/>
      <UserDetails name="Clark" isOnline={false} hideOffline={true}/>

      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@gmail.com</p>
        <button>Edit Profile</button>
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
