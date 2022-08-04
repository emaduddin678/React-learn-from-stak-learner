import React from "react";
import { Component } from "react";
import './timer/index'
import TimerClock from "./timer/index";

class Timer extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <TimerClock />
            </div>
        )
    }
}

export default Timer;