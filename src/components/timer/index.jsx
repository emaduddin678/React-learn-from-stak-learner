import React from "react";
import { Component } from "react";
import classes from './timer.module.css';



class TimerClock extends Component {
    state = {
        count: 0,
        otherProperties: null
    }
    
    intervalId = null;

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
          
    }
    decrementCount = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count -1})
        }
    }
    startTimer = () => {
         if(this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({count: this.state.count - 1}, () => {
                        if(this.state.count === 0) {
                            alert('Timer Finished');
                            clearInterval(this.intervalId);
                            this.intervalId = null;
                        }
                    }); 
            }, 500)
         } 
    }

    stopTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    restTimer = () => {
        if(this.intervalId || !this.intervalId) {
            this.setState({count: 0})
            clearInterval(this.intervalId);
            this.intervalId = null;  
        }
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
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stsop</button>
                    <button onClick={this.restTimer}>Reset</button>
                </div> 
            </div>
        )
    }
}

export default TimerClock;