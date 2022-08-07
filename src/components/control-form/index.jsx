import React from "react";
import { Component } from "react";
import classes from "./control.module.css";

class ControledForm extends Component {
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
        const {name, email, password} = this.state;
        return (
            <div className={classes.main}>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control my-3" type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                    <input className="form-control my-3" type="email" name="email" placeholder="emad@gmail.com" value={email} onChange={this.handleChange}/>
                    <input className="form-control my-3" type="password" name="password" placeholder="*****"  value={password} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ControledForm;