import React from 'react';

import './App.css';
import Greet from './component/Greet';

function App() {
  return (
    <div className="App">
    <Greet name="Manish" messageCount={10} isLoggedIn={true}/>
    </div>
  );
}

export default App;
