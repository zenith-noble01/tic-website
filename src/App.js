import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Tic from './components/Tic';
import { TIcSliderData } from './components/data/TIcSliderData'
import GlobalStyle from './globalStyles'
import Dropdown from './components/Dropdown';

function App() {
const [isOpen ,setIsOpen] = useState(false)
const toggle=()=>{
  setIsOpen(!isOpen)
}

  return (
    <div className="App">
      <GlobalStyle />
       <Navbar  toggle={toggle}/>
       <Dropdown isOpen={isOpen} toggle={toggle}/>
       <Tic slides={TIcSliderData}/>
    </div>
  );
}

export default App;
