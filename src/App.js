import React from 'react';
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import './Style.css';

function App() {
  return (
    <div style={{backgroundColor:"#000"}}>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
