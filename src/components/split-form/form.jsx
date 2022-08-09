import React from "react";
import TextInput from "./text-input";
import PropTypes from 'prop-types';


const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput 
            name="name" 
            label= "Enter Name" 
            placeholder="Emad" 
            value= {props.values.name} 
            onChange= {props.handleChange}
        />
        {/* <input
            name={props.name}  
            type={props.type} 
            placeholder={props.placeholder} 
            id={props.name} 
            value={props.value} 
            onChange={props.onChange}
        /> */}
        <TextInput 
            name="email" 
            type="email" 
            label= "Enter Email" 
            placeholder="ema@gmail.com"
            value= {props.values.email} 
            onChange= {props.handleChange}
        />
        <TextInput 
            name="password" 
            type="password" 
            label= "Enter Password" 
            placeholder="******"
            value= {props.values.password} 
            onChange= {props.handleChange}
        />
        {/* <input className="form-control my-3" type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange}/> */}
        {/* <input className="form-control my-3" type="email" name="email" placeholder="emad@gmail.com" value={email} onChange={this.handleChange}/>
        <input className="form-control my-3" type="password" name="password" placeholder="*****"  value={password} onChange={this.handleChange}/> */}
        <button type="submit">Submit</button>
    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;