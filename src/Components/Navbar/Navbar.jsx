import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbarMainContainer'>
            <Link to="/" className='homeContainer'>Home</Link>
        </div>
    )
}

export default Navbar