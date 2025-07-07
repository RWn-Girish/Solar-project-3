import { useState } from 'react'
import './App.css'
import Homepage from './Components/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router'
import PlanPage from './Components/PlanPage/PlanPage'
import Header from './Components/Header/Header'
import LearnPage from './Components/Learn-Page/Learnpge'
import Company from './Components/Companypage/Company'
import FormComp from './Components/Homepage/Form/form'
import Products from './Components/Products/Products'

function App() {


  return (
    <>
      <Header/>
        <Routes>
          <Route path='/'element={<Homepage/>} />
          <Route path='/plans' element={<PlanPage/>} />
          <Route path="/step2" element={<FormComp />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/learn' element={<LearnPage/>} />
          <Route path='/company' element={<Company/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
