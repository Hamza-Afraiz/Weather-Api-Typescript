import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, SearchBar,WeatherDetails,Day} from './components'

function App() {
  return (
    <div className="App">
     <Header/>
     <SearchBar/>
     <WeatherDetails/>
    
    </div>
  );
}

export default App;
