import React from "react";
import TextInputForSignUp from "./text-input-signup";
import PropTypes from 'prop-types';

const Form = ({values, handleChange, agreement, handleAgreement, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInputForSignUp 
                name="name" 
                label="Name"
                placeholder="Enter name" 
                value={values.name}
                onChange={handleChange}
            />
            <TextInputForSignUp 
                name="email" 
                type="email"
                label="Email"
                placeholder="Enter email" 
                value={values.email}
                onChange={handleChange}
            />
            <TextInputForSignUp 
                name="password" 
                type="password"
                label="Password"
                placeholder="Enter password" 
                value={values.password}
                onChange={handleChange}
            />
            <TextInputForSignUp 
                name="birthDate" 
                type='date'
                label="BirthDate" 
                placeholder= "Eneter BirthDate" 
                value= {values.birthDate} 
                onChange= {handleChange}
            />
            <div className="form-group">
                <label >
                    <input className="ms-1 me-1"
                        type="radio" 
                        name="gender"
                        value="Male" 
                        onChange={handleChange}
                    />Male
                </label>
                <label >
                    <input  className="ms-3 me-1"
                        type="radio" 
                        name="gender"
                        value="Female" 
                        onChange={handleChange}
                    />Female
                </label>
                <label >
                    <input  className="ms-3 me-1" type="radio" 
                        name="gender"
                        value="Other" 
                        onChange={handleChange}
                    />Other
                </label>
            </div>
            <div className="form-group">
                <label >
                    <input className="ms-1" type="checkbox" 
                        name="agreement" 
                        checked={agreement}
                        onChange={handleAgreement}
                    /> I agree that all information is correct
                </label>
            </div>
            <button className="btn btn-primary" 
                type="submit" disabled={!agreement}>Create Users</button>
        </form>
    )
}


Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}


export default Form;