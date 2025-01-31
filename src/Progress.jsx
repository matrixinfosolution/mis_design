import React from 'react';
import './Step2.css';
const Progress=({totalSteps,step})=>{
    const progress1= ((step - 1) / (totalSteps - 1)) * 100;
return(<div className='fg-progress' style={{height:"4px",background:"#ddd",width:"100%",transition:'all 0.4s ease-in'}}>
<div  style={{height:"4px",background:"blue",width:`${progress1}%`,transition:'all 0.4s ease-in'}}></div>
</div>

);
}
export default Progress;