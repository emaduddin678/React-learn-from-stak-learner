import React from "react";
import Form from "./form";
import PropTypes from "prop-types";

const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

class SignupForm extends React.Component {
  state = {
    values: initValues,
    agreement: false,
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleAgreement = (event) => {
    this.setState({
      agreement: event.target.checked,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errorsMsg, isValid } = this.validate();

    if (isValid) {
      this.props.createUser(this.state.values);
      console.log(this.state.values);
      // console.log(errorsMsg);
      event.target.reset();
      this.setState({ values: initValues, agreement: false, errors: {} });
    } else {
      this.setState({
        errors: errorsMsg,
      });
      console.log(this.state);
      // console.log(this.state.values);
      console.log(this.state.errors);
      // console.log(errorsMsg);
    }

    // console.log(this.state.values);
    // event.target.reset();
    // this.setState({ values: initValues, agreement: false });
  };

  validate = () => {
    const errorsMsg = {};
    const {
      values: { name, email, password, birthDate, gender },
    } = this.state;
    // errors.msg = "I am error Object";
    if (!name) {
      errorsMsg.name = "Please provide your name";
    }
    if (!email) {
      errorsMsg.email = "Please provide your Email";
    }
    if (!password) {
      errorsMsg.password = "Please provide your Password";
    }
    if (!birthDate) {
      errorsMsg.birthDate = "Please provide your birthDate";
    }
    if (!gender) {
      errorsMsg.gender = "Are you gay?";
    }
    return {
      errorsMsg,
      isValid: Object.keys(errorsMsg).length === 0,
    };
  };

  render() {
    return (
      <div>
        <h1>Signup Form</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default SignupForm;
