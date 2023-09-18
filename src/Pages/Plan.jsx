import React, { useContext, useEffect, useState } from 'react';
import "./Plan.css";
import { useNavigate } from 'react-router-dom';
import { PremiumContext } from '../Components/Context/PremiumContextProvider';
// import { PremiumContext } from '../Components/Context/PremiumContextProvider';

function Plan() {
    const { selectData } = useContext(PremiumContext)
    // const [selectData, setSelectData] = useState([])
    const [sum, setSum] = useState(500000)
    const navigate = useNavigate()
    const [showObj, setShowObj] = useState({})




    const handleSelect = (num) => {
        const filterData = selectData?.filter((elem) => +elem.sum_assured === +num)
        setShowObj(filterData)
    }

    useEffect(() => {
        handleSelect(sum);
        // eslint-disable-next-line
    }, [])

    const handleOption = (e) => {
        handleSelect(e.target.value)
    }



    return (
        <>
            {selectData.length === 0 ?
                <div className='someThing'>Something Went Wrong! Try Again</div>
                :
                <div className='planMainContainer'>
                    <div className='planContainer'>
                        <div className='plainHeading'>Plan on the basis of your information</div>


                        <select onChange={(e) => handleOption(e)} >
                            {selectData?.map((elem) => {
                                return (
                                    <option value={elem.sum_assured}>{elem.sum_assured}</option>
                                )
                            })}

                        </select>
                    </div>



                    <table className='planTable'>
                        <thead>
                            <tr>
                                <th></th>
                                {showObj[0]?.premium_breaks.map((elem) => {
                                    return (
                                        <th>{elem.user_type.toUpperCase().replace(/_/g, ' ')}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <tr>Base Rate</tr>
                                <tr>Discounted Rate</tr>
                                <tr>Floater Discount</tr>
                            </td>
                            {showObj[0]?.premium_breaks.map((elem) => {
                                return (
                                    <td>
                                        <tr>{elem.base_rate}</tr>
                                        <tr>{elem.discounted_rate}</tr>
                                        <tr>{elem.floater_discount} %</tr>
                                    </td>
                                )
                            })}

                        </tbody>
                    </table>

                    <div className='planbutton'>
                        <div>Total - ₹ {showObj[0]?.total}</div>
                        <button onClick={(() => navigate("/checkout"))} className='addToCart'>Add to cart</button>
                    </div>


                </div >
            }
        </>

    )
}

export default Plan