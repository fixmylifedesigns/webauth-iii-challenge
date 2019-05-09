import React from "react";
import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    config.headers.authorization = localStorage.getItem('token') ;
    return config
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticatied extends React.Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = <h3>please log in</h3>;

      return <div>{token ? <Component {...this.props} /> : notLoggedIn}</div>;
    }
  };
}