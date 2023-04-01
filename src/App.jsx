import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import BookMarkCart from './components/BookMark-cart/BookMarkCart';
import Home from './components/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount]= useState(0)
  
  return (
    <div className="App">
      
      <div className='header m-auto mb-3'>
        <Header></Header>
        <div className="main row m-auto">
        <div className="home-container  col-md-8"><Home></Home></div>
        <div className="bookMark-container col-md-4 card"><BookMarkCart></BookMarkCart></div>
        </div>
    </div>
    </div>
  );
};

export default App

