import React, {Component} from "react";
import Profile from "./profile";
import Skills from "./profile/skils";
// import MyProps from "./props";

class MainApp extends Component {
    mahim = {
        name: "Mahim bhai er Awesome ",
        skill1: "Django",
        skill2: "Angular",
        skill3: "Vue",
        skill4: "Node.js",
    }
    hridoy = {
        name: "Hridoy bhai er ",
        skill1: "Node",
        skill2: "Html",
        skill3: "js",
        skill4: "Css",
    }

    render () {
         
        return (
            <div >
                <Profile />
                <div className="center">
                    <h3 className="line">List of Programmers</h3>
                    
                    <Skills name = {this.mahim.name} skill1={this.mahim.skill1} skill2={this.mahim.skill2} skill3={this.mahim.skill3} skill4={this.mahim.skill4}/>
                    
                    <Skills name = {this.hridoy.name} skill1={this.hridoy.skill1} skill2={this.hridoy.skill2} skill3={this.hridoy.skill3} skill4={this.hridoy.skill4}/>
                    
                </div>
                <div className="prop">
                    {/* <h2>Learnin Props to input in React</h2>
                    <MyProps name="Mohammad Emad" />
                    <MyProps name="Mahim Bhaia" />
                    <MyProps name="Fazlul Karim bhai" />   */}

                </div>
                  
            </div> 
        )
    }
}

export default MainApp;