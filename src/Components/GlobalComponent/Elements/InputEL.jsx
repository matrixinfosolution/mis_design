import React from "react";
import "./InputEL.css";

const InputEL = ({ label, type = "text", id, placeholder,
startIcon=null,
  endIcon=null,
  readOnly=false,
  disabled=false,
  hideStepper=false,
  variant=null,
  className="",
  labelClassName="",
  eventHandlers={}
}) => {
  return (
    <div className={`bordered-div ${variant?"standard":""}
     ${className}
     focused}`}>
      <label htmlFor={id} className={`${labelClassName}`}>{label}</label>
      {startIcon && <div className={`start-icon`}>{startIcon}</div>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`inp 
        ${startIcon ? "inp-icon-start":''} ${endIcon ? "inp-icon-end":''}
        ${hideStepper ? "hide-stepper":""}
        `}
        readOnly={readOnly}
        disabled={disabled}
        {...eventHandlers}
      />
      {endIcon && <div className="end-icon">{endIcon}</div>}
    </div>
  );
};

export default InputEL;
