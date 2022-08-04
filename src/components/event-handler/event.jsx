import React, { Component } from "react";
import classes from './event.module.css';

class Event extends Component {
    handleButton = (event) => {
        console.log(event.target);
    }

    handleChange = (event) => {
        console.log(event.target.value)
    }


    render () {
        return (
            <div className={classes.Root}>
                <h1>Events in React</h1>
                <button className={classes.Btn} onClick= {this.handleButton}>
                    click Me
                </button>

                <input className={classes.inp} type="text" placeholder="Enter Text" onChange={this.handleChange} />
            
                
            </div>
        )
    }
}

export default Event;