import React from "react";
import RadioInput from "./radio-input";
import PropTypes from "prop-types"

const Radio = (props) => (
  <div className="form-group">
    <RadioInput label="Male" value="Male" onChange={props.onChange} />
    <RadioInput label="Female" value="Female" onChange={props.onChange} />
    <RadioInput label="Other" value="Other" onChange={props.onChange} />
  </div>
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Radio;
