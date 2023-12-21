
import React from 'react'
import './index.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
     <>
     <Router>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='About' element={<About/>}/>
         <Route path='Contact' element={<Contact/>}/>
       </Routes>
      </Router>
     </>
  );
}

export default App;
