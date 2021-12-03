import React, { Component } from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import './CSS/vendors/font-awesome.min.css';

import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Index from './components/Index'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;