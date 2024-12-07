import React from "react";
import "./FloatingLabelInput.css";

const FloatingLabelInput = ({
  type,
  id,
  label,
  value,
  size = "md",
  placeholder = " ",
  error,
  touched,
  className="",
  labelClassName="",
  readOnly = false,
  disabled = false,
  events = {}, // Dynamic event handlers
}) => {
  return (
    <div
    className={`floating-label-input ${size} ${
      error && touched ? "has-error" : ""
    } ${disabled ? "is-disabled" : ""}`} // Add a class for disabled styling
    >
      <input
        type={type}
        id={id}
        value={value}
        className={`input-field ${className}`}        
        placeholder={placeholder} /* Placeholder for floating label */
        readOnly={readOnly} // Apply readonly attribute
        disabled={disabled} // Apply disabled attribute
        {...events} /* Spread dynamic event handlers */
      />
      <label htmlFor={id} className={`input-label ${labelClassName}`}>
        {label}
      </label>
      {error && touched && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FloatingLabelInput;
