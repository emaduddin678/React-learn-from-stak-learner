import React from "react";
import PropTypes from "prop-types";

const RadioInput = (props) => (
  <div className="d-inline">
    <label>
      <input
        className={"ms-4 me-1 "}
        type="radio"
        name="gender"
        value={props.value}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  </div>
);

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default RadioInput;
