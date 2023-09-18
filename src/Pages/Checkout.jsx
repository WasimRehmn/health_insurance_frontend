import React from 'react'
import "./Checkout.css"
import homeImage from './homeImage.webp';
import { useNavigate } from 'react-router-dom';


function Checkout() {
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert("Thank you for purchasing health insurance. Your policy details will be sent to your email shortly.")
        navigate("/")
    }


    return (
        <div className='checkoutMainContainer'>
            <h2>Enter your information</h2>
            <div className='checkOutSubContainer'>
                <div className='checkoutImage'>
                    <img src={homeImage} alt="" />
                </div>
                <form className='checkoutForm' onSubmit={(e) => handleFormSubmit(e)}>
                    <div className='checkOutContainer'>
                        <label>Name</label>
                        <input type="text" placeholder='Enter your name' required />
                    </div>
                    <div className='checkOutContainer'>
                        <label>Mobile</label>
                        <input type="number" placeholder='Enter your Number' required />
                    </div>
                    <div className='checkOutContainer'>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your mail id' required />
                    </div>
                    <input type="submit" className='checkOutButton' />
                </form>
            </div>
        </div>
    )
}

export default Checkout