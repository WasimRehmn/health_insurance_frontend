import React from 'react'
import "./Counter.css"

function Counter({ count, setCount, adult, setAdult, title }) {


    const handleIncrement = () => {
        if (title === "Child") {
            count < 1 ? setCount(1) : count > 3 ? setCount(4) : setCount(count + 1)
        } else {
            adult < 1 ? setAdult(1) : adult > 1 ? setAdult(2) : setAdult(adult + 1)
        }
    };

    const handleDecrement = () => {
        if (title === "Child") {
            if (count > 1) {
                setCount(count - 1);
            }
        } else {
            if (adult > 1) {
                setAdult(adult - 1);
            }
        }
    };



    return (
        <div className='counterContainer'>
            <div onClick={() => handleDecrement()} className='pointer'>-</div>
            <div>{title === "Child" ? count : adult}</div>
            <div onClick={() => handleIncrement()} className='pointer'>+</div>
        </div>
    )
}

export default Counter