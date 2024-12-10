import React from "react";
import "./FixedTopLabelInput.css";

const FixedTopLabelInput = ({
  type = "text",
  id,
  label,
  value,  
  startIcon,
  endIcon,
  error,
  touched,  
  placeholder,
  size = "md",
  className="",
  labelClassName="",
  readOnly = false,
  disabled = false,
  events = {}, // Dynamic event handlers
}) => {
  const isLabelFilled = value?.trim().length > 0;

  return (
    <div
      className={`fixed-top-label-input ${size} ${
        error && touched ? "has-error" : ""
      } ${disabled ? "is-disabled" : ""}`}
    >
      {startIcon && <div className="input-icon start-icon">{startIcon}</div>}
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        className={`input-field ${
          startIcon ? "has-start-icon" : ""
        } ${endIcon ? "has-end-icon" : ""} ${className}`}
        {...events} /* Spread dynamic event handlers */
      />
      <label
        htmlFor={id}
        className={`input-label label-filled ${labelClassName}`}
      >
        {label}
      </label>
      {endIcon && <div className="input-icon end-icon">{endIcon}</div>}
      {error && touched && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FixedTopLabelInput;
