import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  submitForm = e => {
    e.preventDefault();
    const end = "http://localhost:5000/api/auth/login";

    axios
      .post(end, this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username">
              <input
                id="username"
                onChange={this.handleChange}
                value={this.state.username}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
              />
            </label>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
