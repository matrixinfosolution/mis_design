import React from "react";
import PropTypes from "prop-types";
import { Button, Spinner } from "react-bootstrap";
import "./ButtonEL.css";

const ButtonEL = ({
  type = "button",
  variant = "primary",
  isLoading = false,
  onClick,
  disabled = false,
  children,
  loadingText = "Processing...",
  className = "",  
  icon = null,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      disabled={isLoading || disabled}
      onClick={onClick}
      className={`dynamic-button ${className}`}
    >
      {isLoading ? (
        <>
          <Spinner animation="border" size="sm" className="me-2" />
          {loadingText}
        </>
      ) : (
        <>
          {icon && <span className="button-icon">{icon}</span>}
          {children}
        </>
      )}
    </Button>
  );
};

ButtonEL.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  loadingText: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default ButtonEL;
