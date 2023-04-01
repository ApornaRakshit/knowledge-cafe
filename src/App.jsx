import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import BookMarkCart from './components/BookMark-cart/BookMarkCart';
import Home from './components/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [readTime,setReadTime]=useState("")
  const handleWatchTime =(time)=>{
    const previousReadTime= JSON.parse(localStorage.getItem("readTime"));
    if(previousReadTime){
     const sum = previousReadTime + time;
     localStorage.setItem("readTime",sum)
     setReadTime(sum);
    }
    else{
      localStorage.setItem("readTime",time)
      setReadTime(time);
    }
  };
  
  return (
    <div className="App">
      
      <div className='header m-auto mb-3'>
        <Header></Header>
        <div className="main row m-auto">
        <div className="home-container  col-md-8"><Home handleWatchTime={handleWatchTime}></Home></div>
        <div className="bookMark-container col-md-4 card h-50"><BookMarkCart readTime={readTime}></BookMarkCart></div>
        </div>
    </div>
    </div>
  );
};

export default App