import React from 'react'
import Header from '../Header/Header'
import MainImage from '../Header/Image'
import "./FirstC.css"
const FirstC = () => {
  return (
    <div>
      <div className="TOP__one">
        <div>
         <Header />  
        </div>
        <div><MainImage /></div>
       
        
      </div>
      {/* <div className='Scroll__down'>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a></div> */}
    </div>
  );
}

export default FirstC
