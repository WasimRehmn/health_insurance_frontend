import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Plan from '../Pages/Plan'
import Checkout from '../Pages/Checkout'

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}

export default AllRoutes