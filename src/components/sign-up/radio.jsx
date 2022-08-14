import React from "react";
import RadioInput from "./radio-input";
import PropTypes from "prop-types";

const Radio = (props) => (
  <div className="form-group">
    <h3>Your gender</h3>
    <RadioInput
      label="Male"
      value="Male"
      onChange={props.onChange}
      error2={props.error}
    />
    <RadioInput
      label="Female"
      value="Female"
      onChange={props.onChange}
      error2={props.error}
    />
    <RadioInput
      label="Other"
      value="Other"
      onChange={props.onChange}
      error2={props.error}
    />
  </div>
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Radio;
