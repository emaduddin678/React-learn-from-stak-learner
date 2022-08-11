import React from "react";
import PropTypes from "prop-types";

const RadioInput = (props) => (
  <label>
    <input
      className="ms-3 me-1"
      type="radio"
      name="gender"
      value={props.value}
      onChange={props.onChange}
    />
    {props.label}
  </label>
);

RadioInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RadioInput;
