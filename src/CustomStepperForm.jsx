import React, { useState,useRef } from 'react';
import { Container,Row,Col ,Form} from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import './Step2.css'; 
import Progress from './Progress';
import './InputEL.css';
import InputEL from './InputEL';
const message=["Step 1","Step 2","Step 3"];


const CustomStepperForm = () => {
    
   return(<Multi/>);

};

function Multi() {
    const [step,setSteps]=useState(1);
    const [activeStep, setActiveStep] = useState(0);
    const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
  const handleChange1 = (e, index) => {
    let newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Auto focus next input if the current one is filled
    if (e.target.value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length === 4) {
      alert(`Code Submitted: ${verificationCode}`);
      // Handle the code submission here (e.g., API call for password reset)
    } else {
      alert('Please enter a 4-digit code');
    }
  };
   const totalSteps = 3
    function handlePrev() {
      if(step > 1) setSteps((step)=>step - 1);  
    }
    function handleNext(){
        if(step == 2) setSteps((step)=> step + 1); 
        if(step == 1) setSteps((step)=> step + 2);
         
    }
    function handlePrev1() {
        if(step == 3) setSteps((step)=>step - 2);
        if(step == 2)   setSteps((step)=>step - 1);
      }
      function handleNext1(){
        if(step == 1) setSteps((step)=> step + 1); 
         if(step == 3) setSteps((step)=>step - 1);
    }
return(
    <div className='container'>
        <div className='progress_contain'>
            <Progress totalSteps={totalSteps} step={step} className="progress active"/>
            <div className={`${step >=1 ? "circle active" : "circle"}`}onClick={handlePrev1}>1</div>
            <div className={`${step >=2 ? "circle active" : "circle"}`}onClick={handleNext1}>2</div>
            <div className={`${step >=3 ? "circle active" : "circle"}`} onClick={handleNext}>3</div>
            
        </div>
        
        {/*<div className='content'>
            <Message step={step}/>
            <div className='btns'>
            <button className='btn' onClick={handlePrev}>Prev</button>
            <button className='btn'onClick={handleNext}>Next</button>
        </div>
</div>*/}
<div className='wrapper'>
 {step === 1 && (
        <div>
          <h3>Forget Passward</h3>
          <p className='mt-3'>No worries,we'll send you reset instructions</p>
          <label className='text9'>Email</label>
        
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button className='mt-6 butts bg-primary'>Reset Passward</button>
         <p className='mt-4'><span><BsArrowLeft /></span> Back to log in</p>
        </div>
      )}
       {step === 2 && (
        <div>
          <h3>Passward reset</h3>
          <p className='mt-3'>We send a code to <b>amelie@utiledui.com</b></p>
          <Row>
          
          <Col lg={12}>
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange1(e, index)}
                maxLength="1"
                ref={inputRefs[index]}
                autoFocus={index === 0}
                required
                className="code-input"
              />
            ))}
          </div>
          </Col>
          </Row>
          <button className='mt-6 butts bg-primary'>Continue</button>
        
        <p>Don't receive the email?<span style={{color:"blue"}}>Click to resend</span></p>
        <p className='mt-4'><span><BsArrowLeft /></span> Back to log in</p>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Set new passward</h3>
          <p className='mt-3'>Must be atleast 8 characters</p>
          <label className='mt-4 text9'>Passward</label>
          <input
            type="text"
            name="firstName"
            placeholder="passward"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <label className='mt-3 text9'>Confirm passward</label>
           <input
            type="text"
            name="firstName"
            placeholder="passward"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} className='mt-1'
          />
          <button className='mt-6 butts bg-primary'>Reset Passward</button>
          <p className='mt-4'><span><BsArrowLeft /></span> Back to log in</p>
        </div>
      )}
        </div>
        
        
        </div>
       
    
);
}



export default CustomStepperForm;