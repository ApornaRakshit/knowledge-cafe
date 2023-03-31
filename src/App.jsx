import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import ReactBootstrap from './components/React-bootstrap/ReactBootstrap';
import Blog from './components/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount]= useState(0)
  
  return (
    <div className="App">
      
      <Header></Header>
      <Blog></Blog>
      <ReactBootstrap></ReactBootstrap>
    </div>
    
    
  );
};

export default App

