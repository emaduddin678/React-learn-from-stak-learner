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
    />
    <RadioInput
      label="Female"
      value="Female"
      onChange={props.onChange}
    />
    <RadioInput
      label="Other"
      value="Other"
      onChange={props.onChange}
    />
    {props.error && (
      <h1 className="invalid-feedback d-block ms-4">
        {props.error + "   If not, please provide your gender"}
      </h1>
    )}
  </div>
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Radio;
