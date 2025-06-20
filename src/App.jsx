import { useState } from 'react'
import './App.css'
import Homepage from './Components/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router'
import PlanPage from './Components/PlanPage/PlanPage'
import Header from './Components/Header/Header'
import LearnPage from './Components/Learn-Page/Learnpge'
// import productFeatures from './Components/Products/productFeature'

function App() {


  return (
    <>
      <Header/>
        <Routes>
          <Route path='/'element={<Homepage/>} />
          <Route path='/plans' element={<PlanPage/>} />
          {/* <Route path='/products' element={<Products/>} /> */}
          <Route path='/learn' element={<LearnPage/>} />
          {/* <Route path='/company' element={<Company/>} /> */}
        </Routes>
        <Footer/>
      {/* <productFeatures/> */}
    </>
  )
}

export default App
