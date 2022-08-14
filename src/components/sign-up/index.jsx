import React from "react";
import Form from "./form";


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
    errors: {}
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
    const {errors, isValid } = this.validate();

    if(isValid) {
      console.log(this.state.values);
      event.target.reset();
      this.setState({ values: initValues, agreement: false , errors:{}});
    } else{
      this.setState({
        errors: errors
      })
    }


    // console.log(this.state.values);
    // event.target.reset();
    // this.setState({ values: initValues, agreement: false });
  };

  validate = () => {
    const errors = {}
    const {values: {name, email, password, birthDate, gender}} = this.state;
    errors.msg = "I am error Object";
    if(!name) {
      errors.name = "Please provide your name";
    }
    if(!email) {
      errors.email= "Please provide your Email";
    }
    if(!password) {
      errors.password= "Please provide your Password";
    }
    if(!birthDate) {
      errors.birthDate= "Please provide your birthDate";
    }
    if(!gender) {
      errors.gender = "Are you gay?"
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    }

  }


  render() {
    return (
      <div className="p-5">
        <h1>Signup Form</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          errors= {this.state.errors}
          handleChange={this.handleChange}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignupForm;
