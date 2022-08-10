import React from "react";
import { Component } from "react";


class Test extends Component {
    state = {
        name: "Emad uddin "
    }

    handleButton = event => {
        console.log(event);
        console.log("I am a Button");
        console.log(event.target);
    }

    handleChange = event => {
        console.log(event.target.value)
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
                />
            </div>
        )
    }


}

export default Test;