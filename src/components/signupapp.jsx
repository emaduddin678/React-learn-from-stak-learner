import React from "react";

import SignupForm from "./sign-up";

class SignupApp extends React.Component {
  state = {
    users: [],
  };
  createUser = (user) => {
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div className="p-5">
        <h1>Working with Forms in React</h1>
        <hr />
        <SignupForm createUser={this.createUser} />
        <div>
          <h3>All Registered Users</h3>
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name}, {user.email}, {user.password}, {user.birthDate}, {user.gender}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SignupApp;
