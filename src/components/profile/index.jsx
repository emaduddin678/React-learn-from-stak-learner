import React from "react";
import './profile.style.css'
import Bio from "./bio";
import Skills  from "./skils";
import Links from "./links";  


class Profile extends React.Component {

    me = {
        namse: "Emad Uddin",
        title: "Fullstack Javascript Developer, React Learner, Backend Developer",
        note: "Multiple props uses"
    }
    skill = {
        name: "",
        skill1: "Node.js",
        skill2: "Express.js",
        skill3: "MongoDB",
        skill4: "React",
    }

    render() {
        // console.log("Profile folder - " , this.props);
        return (
            <div className="container">
                <Bio name={this.me.namse} title={this.me.title} note= {this.me.note} />
                <Skills name={this.skill.name} skill1={this.skill.skill1} skill2={this.skill.skill2} skill3={this.skill.skill3} skill4={this.skill.skill4}/>
                <Links />
            </div>
        )
    }
}

export default Profile;