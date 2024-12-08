import React from "react";
import "./FixedTopLabelInput.css";

const FixedTopLabelInput = ({
  type = "text",
  id,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  startIcon,
  endIcon,
  error,
  touched,
  disabled,
}) => {
  const isLabelFilled = value?.trim().length > 0;

  return (
    <div
      className={`fixed-top-label-input ${
        error && touched ? "has-error" : ""
      } ${disabled ? "is-disabled" : ""}`}
    >
      {startIcon && <div className="input-icon start-icon">{startIcon}</div>}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        className={`input-field ${
          startIcon ? "has-start-icon" : ""
        } ${endIcon ? "has-end-icon" : ""}`}
      />
      <label
        htmlFor={id}
        className={`input-label ${isLabelFilled ? "label-filled" : ""}`}
      >
        {label}
      </label>
      {endIcon && <div className="input-icon end-icon">{endIcon}</div>}
      {error && touched && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FixedTopLabelInput;
