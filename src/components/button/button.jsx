import React from "react";
import { Component } from "react";


class Test extends Component {
    state = {
        name: ""
    }

    handleButton = event => {
        console.log(event);
        console.log("I am a Button");
        console.log(event.target);
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }

    handleFocus = event => {
        console.log("I am focus Event")
    }

    handleBlur = event => {
        if(!this.state.name) {
            alert("Please Enter Name")
        }
        console.log("I am Blur Event")
    }

    render() {
        return(
            <div className="p-5">
                <h1>Event in React</h1>
                <button className="btn btn-primary"
                    onClick={this.handleButton}
                >Click Me Emad
                </button> <br />
                <input type="text" 
                    placeholder="Enter some Text" 
                    className="p-3 my-3 form-control" 
                    // value="Emad How Are You Fine? I am fine" 
                    value= {this.state.name}
                    onChange={this.handleChange} 
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                /><br/><br/>
                {this.state.name && <h1>Your name is {this.state.name}</h1>}
            </div>
        )
    }


}

export default Test;