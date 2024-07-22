import React, { useState } from 'react'

const Fourth = () => {
  const name = ['Tcs' , 'wipro' , 'infosys'];
  const [count , setCount] = useState(0);

  // next functionality
  function nextshow () {
    if(count < name.length+1){
       setCount(count+1);
    }
  }

  // prev functionality
  function prevshow () {
    if(count > 0){
     setCount(count-1);
    }
  }
  return (
    <>
    <h1>Slideshow 4th example:</h1>
    <div id='content'>
      {name[count]}
    </div>

    <div>
      <button type='button' onClick={nextshow}>Next</button>
      <button type='button' onClick={prevshow}>Prev</button>
    </div>
    </>
  )
}

export default Fourth
