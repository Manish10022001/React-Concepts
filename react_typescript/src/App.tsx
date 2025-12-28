import React from 'react';

import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';

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
    <Greet name="Manish" messageCount={10} isLoggedIn={true}/>
    <Person name={personName}/>
    <PersonList names={personList}/>
    </div>
  );
}

export default App;
