import React from "react";
import { Component } from "react";
import classes from './inputs.module.css'

class Input extends Component {
    state = {
        name: "",
        country: "",
        bio: "",
        birthDay: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 


    render() {
        return (
            <div className={classes.root}>
                <input  className={`form-control my-2  ${classes.name}`}  
                type="text"  name="name" placeholder="Emad" 
                onChange={this.handleChange}/>
                <select className="form-control my-2" name="country" 
                onChange={this.handleChange}>
                    <option  value="BanglaDesh">BanglaDesh</option>
                    <option  value="Turkiye">Turkiye</option> 
                    <option  value="Pakishtan">Pakishtan</option>
                    <option  value="Japan">Japan</option>
                    <option  value="Russia">Russia</option>
                </select>
                <textarea className="form-control my-2" name="bio" 
                cols="30" rows="10" placeholder="Tell me About YourSelf" 
                onChange={this.handleChange}></textarea>
                <input className="form-control my-2" type="date" 
                name="birthday" onChange={this.handleChange}/> 

            </div>
        )
    }
}

export default Input;