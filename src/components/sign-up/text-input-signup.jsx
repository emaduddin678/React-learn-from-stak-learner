import React from "react";
import PropTypes from "prop-types";

const TextInputForSignUp = (props) => (
  <div className="form-group ">
    <label htmlFor={props.name} className="ms-3">
      {props.label}
    </label>
    <input
      className={
        props.error ? "form-control mb-3 is-invalid" : "form-control mb-3"
      }
      type={props.type}
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    {props.error && <div className="invalid-feedback">{props.error}</div>}
  </div>
);
TextInputForSignUp.propType = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInputForSignUp.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default TextInputForSignUp;
