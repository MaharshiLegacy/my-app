import { useState } from 'react';
import './App.css';
import MainSection from './Components/MainSection';
import Navbar from './Components/Navbar';

function App() {
  const [mode,changeMode]=useState("Light Mode");
  return (
    <>
   <Navbar heading="Text Utilities" mode={mode} changeMode={changeMode}/>
   <MainSection mode={mode} />
    </>
  )
   
}

export default App;
