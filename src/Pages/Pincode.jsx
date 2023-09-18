import React, { useContext, useState } from 'react'
import "./Pincode.css"
import { PremiumContext } from '../Components/Context/PremiumContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from "axios"



function Pincode() {
    const [selectCity, setSelectCity] = useState("Select Your City");
    const [showDrop, setShowDrop] = useState(false)
    const { postData, setSelectData } = useContext(PremiumContext)
    const navigate = useNavigate()
    const cityData = [
        {
            key: "Banglore",
            value: "bangalore"
        },
        {
            key: "Delhi",
            value: "delhi"
        },
        {
            key: "Kolkata",
            value: "kolkata"
        },
        {
            key: "Chennai",
            value: "chennai"
        },
        {
            key: "Hydrabad",
            value: "hydrabad"
        },
        {
            key: "Mumbai",
            value: "mmumbai"
        }
    ]

    const handleSelect = (value) => {
        setSelectCity(value)
        setShowDrop(false)
    }

    const handleCity = () => {
        postData.city = selectCity;
        axios.post("https://api-health-insurance-hvv3.onrender.com/premium", postData)
            .then(({ data }) => {
                setSelectData(data.premium)
                navigate("/plan")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    return (
        <div className='pincodeMainContainer'>
            <div className='pinCodeInput' onClick={() => setShowDrop(!showDrop)}>{selectCity}</div>
            <div style={{ display: showDrop ? "" : "none" }} >
                {cityData.map((elem) => {
                    return (
                        <div key={elem.key} className='dropDetails'
                            onClick={() => handleSelect(elem.key)}
                        >{elem.key}</div>
                    )
                })}
            </div>


            <button disabled={selectCity === "Select Your City" ? true : false} onClick={() => handleCity()} className='pinCodeButton'>Continue</button>

        </div>
    )
}

export default Pincode