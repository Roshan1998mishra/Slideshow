import React, { useState } from 'react'

// cars naam ka ek array hai jisme car ke naam hain.
const cars = ["Scorpio", "Baleno", "Maruti Suzuki", "Swift"];

const Second = () => {
    // useState hook ka istemal kar rahe hain, jo `show` naam ka state variable banata hai aur `setShow` function usko update karne ke liye.
    const [show, setShow] = useState(0);

    // nextShow function jo `show` ko next index par set karta hai, agar `show` cars array ke length se kam hai.
    function nextShow() {
        if (show < cars.length - 1) {
            setShow(show + 1);
        }
    }

    // prevShow function jo `show` ko previous index par set karta hai, agar `show` 0 se bada hai.
    function prevShow() {
        if (show > 0) {
            setShow(show - 1);
        }
    }

    return (
        <>
            <h1>Slideshow 2nd Example</h1>
            <div>
                {/* cars array ka current element dikhane ke liye */}
                {cars[show]}
            </div>
            <div>
                {/* Buttons jo nextShow aur prevShow functions ko call karte hain */}
                <button type='button' onClick={nextShow}>Next</button>
                <button type='button' onClick={prevShow}>Prev</button>
            </div>
        </>
    )
}

export default Second
