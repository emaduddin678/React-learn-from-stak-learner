import React from "react";
import { Component } from "react";
import classes from "./splitcontrol.module.css";
// import PropTypes from "prop-types"
// import TextInput from "./text-input";
import Form from "./form";

<Form />



class SplitForm extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    };
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        // const data = {};
        // data.name = event.target.name.value;
        // data.email = event.target.email.value;
        // data.password = event.target.password.value; 
        // console.dir(event.target)
        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        // console.log(data);
        // event.target.reset(); 
        
        console.log(this.state);
        event.target.reset();
        this.setState({name:"", email:"", password:""})
    }

    render() {
        // const {name, email, password} = this.state;
        return (
            <div className={classes.main}>
                <Form 
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}

                />
            </div>
        )
    }
}


 
export default SplitForm; 










