import React, { Component } from "react";
import axios from "axios";
import requiresAuth from "./requiresAuth";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const end = "http://localhost:5000/api/users/";
    
    axios
      .get(end)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
       console.log(this.state.users)
    return (
       
      <div>
        <h2>Our users</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default requiresAuth(Users);
