
import { Route,  Routes  } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import { useEffect, useState } from 'react'
// import { getCharacters } from './api/character'
import './pages/Rick-Morty-API'
import './pages/Home'
import Rick from './pages/Rick-Morty-API'
import Home from './pages/Home'


function App() {
  return(
  <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/rick' element={<Rick/>} />
    </Routes>


    <Footer/>
  </>

)
}
export default App
