import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Presentation from './Components/presentation';
import Slider from './Components/Slider';
import Video from './Components/Video';
import WorkPage from './Components/Time';
import BombArea from './Components/BombArea';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Slider />
      <Video />
     <WorkPage /> 
     <BombArea />
    
    </>
  )
}

export default App
