import React from 'react';
import logo from './logo.svg';
import Slider from 'react-slick';
import { Header, Card, LoadBar, Container } from './components/index'
import Abilities from './sections/Abilities/Abilities'
import { MoreInformation } from './sections';
import CvTemplate from './layers/CvTemplate'


function App() {

  
  return (
    <div className="App" >
      <CvTemplate/>
      
    </div>
  );
}

export default App;
