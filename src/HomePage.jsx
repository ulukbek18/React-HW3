import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Promo from './pages/Promo/Promo'
import Footer from './Components/Footer/Footer'
import { Signup } from './pages/SignUp/Signup'


export const HomePage = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="details" element={<Details />}/>
        <Route path="promo" element={<Promo />}/>
        <Route path="signup" element={<Promo />}/>
        </Routes>
        <Footer/>
    </div>
  )
}
export default HomePage
