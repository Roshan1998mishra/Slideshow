import React, { useState } from 'react'

const Third = () => {
    const fruits = ["Apple" , "Mango" , "Orange"];
    const [show , setShow] = useState(0);

    // next functionality
    function nextshow () {
        if (show < fruits.length - 1){
          setShow (show+1);
        }
    }

    // prev functionality 
    function prevshow () {
        if (show > 0) {
         setShow(show-1);
        }
    } 
    
  return (
    <>
    <h1>Slideshow 3rd example</h1>
    <div id='content'>
       {fruits[show]}
    </div>

    <div>
        <button type='button' onClick={nextshow}>Next</button>
        <button type='button' onClick={prevshow}>Prev</button>
    </div>
    </>
  )
}

export default Third
