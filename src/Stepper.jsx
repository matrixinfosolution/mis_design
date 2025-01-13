import React, { useState } from 'react';
import './Stepper1.css';  // Import the CSS file
import Progress from './Progress';
const message=["Step 1","Step 2","Step 3"];
const Stepper = () => {
   return<Multi/>

};

const Multi=()=>{
    const [step,setSteps]=useState(1);
   const totalSteps = 3
    function handlePrev() {
      if(step > 1) setSteps((step)=>step - 1);  
    }
    function handleNext(){
        if(step < 3) setSteps((step)=> step + 1);  
    }
    
    
return(
    <div className='container'>
        <div className='progress_container'>
            <Progress totalSteps={totalSteps} step={step} className="progress active"/>
            <div className={`${step >=1 ? "circle active":"circle"}`} onClick={handlePrev}>1</div>
            <div className={`${step >=2 ? "circle active":"circle"}`} onClick={handleNext}>2</div>
            <div className={`${step >=3 ? "circle active":"circle"}`} onClick={handleNext}>3</div>
            
        </div>
        <div className='wrapper'>
        <div className='content'>
            <Message step={step}/>
            <div className='btns'>
            <button className='btn' onClick={handlePrev}>Prev</button>
            <button className='btn'onClick={handleNext}>Next</button>
        </div>
        </div>
        </div>
        
       
    </div>
);
}

function Message({step}){
    return (
        <div>
        <h4>{message[step - 1]}</h4>
        <label>
        <input type="text"></input>
       
    </label>
    </div>
    )
}

export default Stepper;