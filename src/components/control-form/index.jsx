import React from "react";
import { Component } from "react";
import classes from "./control.module.css";

class ControledForm extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.dir(event.target)
        console.log(event.target.name.value);
        console.log(data);

        event.target.reset();

    }


    render() {
        return (
            <div className={classes.main}>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control my-3" type="text" name="name" placeholder="Name" />
                    <input className="form-control my-3" type="email" name="email" placeholder="emad@gmail.com" />
                    <input className="form-control my-3" type="password" name="password" placeholder="*****"  />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ControledForm;