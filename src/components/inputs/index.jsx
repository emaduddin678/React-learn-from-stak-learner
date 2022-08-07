import React from "react";
import { Component } from "react";
import classes from './inputs.module.css'

class Input extends Component {
    state = {
        name: "",
        country: "",
        bio: "",
        birthDay: "",
        gender: "",
        agree: false,
        skills: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    } 
    handleCheckBox = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSkillChange = event => {
        if(event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value);
            this.setState({skills})
        }
    }


    render() {
        const {name, country, bio, birthDay, agree, skills} = this.state;
        return (
            <div className={classes.root}>
                <input  className={`form-control my-2  ${classes.name}`}  
                type="text"  name="name" placeholder="Enter your name" 
                onChange={this.handleChange} value= {name}/>
                <select className="form-control my-2" name="country" 
                onChange={this.handleChange} value= {country}>
                    <option > Select country</option>
                    <option  value="BanglaDesh">BanglaDesh</option>
                    <option  value="Turkiye">Turkiye</option> 
                    <option  value="Pakishtan">Pakishtan</option>
                    <option  value="Japan">Japan</option>
                    <option  value="Russia">Russia</option>
                </select>
                <textarea className="form-control my-2" name="bio" 
                cols="30" rows="10" placeholder="Tell me About YourSelf" 
                onChange={this.handleChange} value= {bio}></textarea>
                <input className="form-control my-2" type="date" 
                name="birthDay" onChange={this.handleChange} value= {birthDay}/> 
                <div>
                    <input className="" type="radio" name="gender" value="Male" onChange={this.handleChange}/> Male
                    <input className="ms-5" type="radio" name="gender" value="Female" onChange={this.handleChange}/> Female
                    <input className="ms-5" type="radio" name="gender" value="Other" onChange={this.handleChange}/> Other
                </div>
                <div>
                    Skills: <br />
                    <input type="checkbox" name="skills" value="Java" checked={skills.includes("Java")} onChange= {this.handleSkillChange} /> Java
                    <input type="checkbox" name="skills" value="JavaScript" checked={skills.includes("JavaScript")} onChange= {this.handleSkillChange} /> JavaScript
                    <input type="checkbox" name="skills" value="Python" checked={skills.includes("Python")} onChange= {this.handleSkillChange} /> Python
                    <input type="checkbox" name="skills" value="Node.js" checked={skills.includes("Node.js")} onChange= {this.handleSkillChange} /> Node.js
                </div>
                <div>
                    <input className="me-2" type="checkbox" name="agree" checked={agree} onChange={this.handleCheckBox}/>I agree to all terms and conditions 
                </div>
                <button onClick={() => console.log(this.state)}>Show Data</button>
            </div>
        )
    }
}

export default Input;