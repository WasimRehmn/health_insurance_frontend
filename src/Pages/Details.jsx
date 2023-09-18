import React, { useContext, useEffect } from 'react'
import "./Details.css"
import { PremiumContext } from '../Components/Context/PremiumContextProvider';

function Details({ count, adult, selectValue, setShowPinCode }) {

    const { data, setData, postData, setPostData } = useContext(PremiumContext)

    useEffect(() => {
        setPostData({ ...postData, "adults": adult, children: count, ages: data })
        // eslint-disable-next-line
    }, [count, adult, data])



    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowPinCode(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: +value })
    }

    return (


        <div className='detailsContainer'>
            <form className='detailsMainContainer' onSubmit={(e) => handleFormSubmit(e)}>
                <div className='detailsMainContainer'>
                    {Array.from({ length: adult }, (_, index) => (
                        <div key={index} className='detailsSubMainContainer' style={{ display: selectValue.includes("Adult") ? "" : "none" }}>
                            <div className='detailsAge'>Adult {index + 1} Age</div>
                            <input type="number" placeholder={`Adult ${index + 1} Age`} name={`${index + 1}a`} min="18" max="99" onChange={(e) => handleChange(e)} required />
                        </div>
                    ))}

                    {Array.from({ length: count }, (_, index) => (
                        <div key={index} className='detailsSubMainContainer' style={{ display: selectValue.includes("Children") ? "" : "none" }}>
                            <div className='detailsAge'>Child {index + 1} Age</div>
                            <input type="number" placeholder={`Your Child ${index + 1} Age`} name={`${index + 1}c`} min="1" max="17" onChange={(e) => handleChange(e)} required={count == 0 ? true:false}/>
                        </div>
                    ))}
                </div>
                <input className='detailsSubmit' type="submit" />
            </form>

        </div>

    )
}

export default Details