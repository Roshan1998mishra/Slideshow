import React, { useState } from 'react';

const names = ["Next", "Prev", "Reset", "Shashank", "Roshan"];

function App() {
    const [showName, setShowName] = useState(0);

    function showNext() {
        if (showName < names.length - 1) {
            setShowName(showName + 1);
        }
    }

    function showPrev() {
        if (showName > 0) {
            setShowName(showName - 1);
        }
    }

    return (
        <>
            <div>{names[showName]}</div>
            <button onClick={showNext}>Next</button>
            <button onClick={showPrev}>Prev</button>
        </>
    );
}

export default App;

