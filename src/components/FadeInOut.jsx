import React ,  {useState } from 'react'
import './FadeInOut.css'
const FadeInOut = () => {
    const  [visible  ,  setVisible ]  = useState(true) ; 

  return (
    <div>
        <div className={visible  ?  'fade-in'  : 'fade-out'} >
            <p> this  text will be  will  fade in and  out  !  </p>

        </div>
        <button onClick={() =>  setVisible(!visible)}>
            Toggle visibility
        </button>
    </div>
  )
}

export default FadeInOut