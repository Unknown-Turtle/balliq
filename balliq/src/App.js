
import React from "react";
import {Routes ,Route} from 'react-router-dom';
import Home from'./Component/Home';
import Data from'./Component/Data';
import Info from'./Component/Info';
import Error from'./Component/Error';
import Navigation from './Component/Navigation'
       

const App = function() {
  return(
    <>
    <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}
export default App;

/*import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
