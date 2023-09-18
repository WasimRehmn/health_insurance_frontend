import React, { useState } from 'react'
import Counter from '../Components/Counter/Counter';
import Details from './Details';
import "./style.css"
import homeImage from './homeImage.webp';

import Pincode from './Pincode';


function Home() {
    const [selectValue, setSelectValue] = useState([]);
    const [count, setCount] = useState(1)
    const [adult, setAdult] = useState(1)
    const [showDetails, setShowDetails] = useState(false)
    const [showPinCode, setShowPinCode] = useState(false)


    const handleForm = () => {
        setShowDetails(true)
    }

    return (
        <>
            <div className='homeMainContainer'>
                <div className='homeHeroImage'>
                    <img src={homeImage} alt="img" />
                </div>

                {showDetails ?
                    showPinCode ?

                        <div className='detailSecondMaincontainer'>
                            <button onClick={() => setShowPinCode(false)}>Back</button>
                            <div className='homeMainHeading'>Where do you live? And Select the Package</div>
                            <div className='homeSubMainHeading'>Select a city / Sum Assured</div>
                            <Pincode />
                        </div>
                        :
                        <div className='detailSecondMaincontainer'>
                            <button onClick={() => setShowDetails(false)}>Back</button>
                            <div className='homeMainHeading'>How old is each member?</div>
                            <div className='homeSubMainHeading'>Enter their age</div>
                            <Details count={count} adult={adult} selectValue={selectValue} setShowPinCode={setShowPinCode} />
                        </div>
                    :
                    <div className='homeSecondContainer'>
                        <div className='homeMainHeading'>Top Family Health Insurance Plans</div>
                        <div className='homeSubMainHeading'>For Self/Family & Parents </div>

                        <div className='homeHeading'>Who would like to insure?</div>
                        <div className='homeInputMainContainer'>


                            <div className='homeMapContainer homeSecondMapContainer'>
                                <div className='homeCheckBoxContainer' >
                                    <input type="checkbox"
                                        checked={selectValue.includes("Adult")}
                                        onChange={() => {
                                            if (selectValue.includes("Adult")) {
                                                setSelectValue(() =>
                                                    selectValue?.filter((id) => id !== "Adult")
                                                );
                                            } else {
                                                setSelectValue(() => [...selectValue, "Adult"]);
                                            }
                                        }}
                                    />
                                    <div>Adult</div>
                                </div>
                                <div style={{ display: selectValue.includes("Adult") ? "" : "none" }} className='counterMainContainer' >
                                    <Counter adult={adult} setAdult={setAdult} title="Adult" />

                                </div>
                            </div>



                            <div className='homeMapContainer homeSecondMapContainer'>
                                <div className='homeCheckBoxContainer' >
                                    <input type="checkbox"
                                        checked={selectValue.includes("Children")}
                                        onChange={() => {
                                            if (selectValue.includes("Children")) {
                                                setSelectValue(() =>
                                                    selectValue?.filter((id) => id !== "Children")
                                                );
                                            } else {
                                                setSelectValue(() => [...selectValue, "Children"]);
                                            }
                                        }}
                                    />
                                    <div>Children</div>
                                </div>
                                <div style={{ display: selectValue.includes("Children") ? "" : "none" }} className='counterMainContainer' >
                                    <Counter count={count} setCount={setCount} title="Child" />
                                </div>
                            </div>




                        </div>

                        <button onClick={() => handleForm()} className='continueMainContainer'
                            disabled={selectValue.includes("Adult") ? false : true}
                        >
                            Continue
                        </button>
                    </div>
                }

            </div >


        </>

    )
}

export default Home