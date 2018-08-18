import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { login, signup, isLoggedin } from "../actions/deploydActions";
import { SSL_OP_NO_QUERY_MTU } from "constants";

const initialState = {
  username: "",
  password: "",
  signup: true,
  login: false
};

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = _.clone(initialState);
    props.isLoggedin();
  }

  handleChange = e => {
    let state = _.clone(this.state);
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  setMode = () => {
    let state = _.clone(this.state);
    state.signup = !state.signup;
    state.login = !state.login;
    this.setState(state);
  };

  loginUser = () => {
    let user = { username: this.state.username };
    if (this.state.login) {
      user.password = this.state.password;
      this.props.login(user);
    }
    user.password = false;
    this.props.signup(user);
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="password"
          value={this.state.password}
          hidden={this.state.signup}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.loginUser()}>
          {this.state.login ? "Login" : "Sign Up"}
        </button>
        <button onClick={() => this.setMode()}>
          Click to {this.state.login ? "Sign Up" : "Login"}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => { dispatch(login(user));},
    signup: user => { dispatch(signup(user));},
    isLoggedin
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
