import React, { Component } from "react";
import classes from './event.module.css';

class Event extends Component {

    state = {
        name: ""
    }
    handleButton = (event) => {
        console.log(event.target);
    }

    handleChange = (event) => {
        
        this.setState({name: event.target.value})
        console.log(this.state.name)
    }
    focusEven = (event) => {
        console.log("I am focus Event");
    }

    blurEvent = (event) => {
        if(!this.state.name) {
            alert("Please Enter Text");
            console.log("Please Enter Your Name")
        }
        console.log("I am Blur Event")
    }


    render () {
        return (
            <div className={classes.Root}>
                <h1>Events in React</h1>
                <button className={classes.Btn} onClick= {this.handleButton}>
                    click Me
                </button>

                <input 
                className={classes.inp} type="text" 
                placeholder="Enter Text" 
                onChange={this.handleChange} 
                value= {this.state.name}
                onFocus = {this.focusEven} 
                onBlur = {this.blurEvent}
                /> 
                {this.state.name && <h2 >Welcome {this.state.name}</h2>}
            
                
            </div>
        )
    }
}

export default Event;