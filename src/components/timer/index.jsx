import React from "react";
import { Component } from "react";
import classes from './timer.module.css';



class TimerClock extends Component {
    state = {
        count: 0,
        otherProperties: null
    }
    
    incrementCount = () => {
        this.setState({count: this.state.count + 1})
          
    }
    decrementCount = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count -1})
        }
    }
    startTimer = () => {
         
    }

    render() {
        // const {count} = this.state;
        return (
            <div className={classes.root}>
                Simple Timer 
                <div className={classes.clock}>
                    <button onClick={this.decrementCount}>-</button>
                       <h1 className={classes.display}>{this.state.count}</h1>
                    <button onClick={this.incrementCount}>+</button>
                </div>
                <div className={classes.bottom}>
                    <button>Start</button>
                    <button>Stop</button>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}

export default TimerClock;