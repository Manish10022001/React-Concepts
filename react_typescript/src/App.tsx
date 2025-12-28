import React from 'react';

import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Status from './component/Status';
import Heading from './component/Heading';
import Oscars from './component/Oscars';

function App() {
  const personName={
    first:"Bruce",
    last:"Wayne",
  }

  const personList = [
    {
      first:"Bruce",
      last:"Wayne"
    },
    {
      first:"Clarke",
      last:"Kent",
    },
    {
      first:"Tony",
      last:"Stark"
    }
  ]
  return (
    <div className="App">
    <Greet name="Manish" isLoggedIn={true} messageCount={20}/>
    <Greet name='Ajinkya' isLoggedIn={true} />
    <Person name={personName}/>
    <PersonList names={personList}/>
    <Status status='loading'/>

    <Heading>Placeholder Text</Heading>
    <Oscars>
      <Heading>Oscar goes to Leonardo Di Caprio</Heading>
    </Oscars>
    </div>
  );
}

export default App;
