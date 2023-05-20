import React from 'react';
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import './Style.css';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>            
           <Route path='/' element={<Body />} />
        </Routes> 
      </BrowserRouter>
      
    
  );
}

export default App;
