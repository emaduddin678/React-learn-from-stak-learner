import React from "react";
import { Component } from "react";
import './count.css';

class Count extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.count = 5;
    //     this.state  = {
    //         count: 0
    //     }
    // }
    // count = 0;

    state = {
        count: 0,
        otherProperties: {}
    }

    render() {
        // console.log(this.count);
        return (
            <div className="center">
                <h1>Why do we need State</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    // this.setState({count: this.state.count +1})
                    this.setState(prev => {
                        return {
                            count: prev.count + 1

                        }
                    },() => {
                        console.log('clicked...', this.state.count)
                    })
                    
                }}>ADD +1</button>
            </div>
        );
    }
};

export default Count;