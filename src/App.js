import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './Navbar';
import { AppBar } from '@mui/material';
function App() {
  let [num,setNum] = useState(0);
  let handleClick=()=>{
    console.log("u clicked me");
    setNum(num+1);
  }
  
  return (
  <div>
    <Navbar/>
    <p>testing</p>
    <div>
      <i>Hello world!</i>
      <button onClick={handleClick}>Click me!!!!</button>
      {num}
    </div>
  </div> 
  );
}

export default App;
