import React from "react";
import TextInputForSignUp from "./text-input-signup";
import PropTypes from "prop-types";
import Radio from "./radio";

const Form = ({
  values,
  handleChange,
  agreement,
  errors,
  handleAgreement,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="p-5">
      <TextInputForSignUp
        name="name"
        label="Name"
        placeholder="Enter name"
        error={errors.name}
        value={values.name}
        onChange={handleChange}
      />
      <TextInputForSignUp
        name="email"
        type="email"
        label="Email"
        error={errors.email}
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
      />
      <TextInputForSignUp
        name="password"
        type="password"
        label="Password"
        error={errors.password}
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
      />
      <TextInputForSignUp
        name="birthDate"
        type="date"
        label="BirthDate"
        error={errors.birthDate}
        placeholder="Eneter BirthDate"
        value={values.birthDate}
        onChange={handleChange}
      />
      <Radio onChange={handleChange} error={errors.gender} />
      <div className="form-group my-2">
        <label>
          <input
            className="ms-1"
            type="checkbox"
            name="agreement"
            checked={agreement}
            onChange={handleAgreement}
          />{" "}
          I agree that all information is correct
        </label>
      </div>
      <button className="btn btn-primary" type="submit" disabled={!agreement}>
        Create Users
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
