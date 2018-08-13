import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { login, signup } from "../actions/deploydActions";

const initialState = {
  username: "",
  password: "",
  signup: true,
  login: false,
};

export class Login extends Component {
  state = _.clone(initialState);

  static get propTypes() {
    return {
      login: PropTypes.any,
      signup: PropTypes.any
    };
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
    let user = {username: this.state.username};
    if(this.state.login) {
      user.password = this.state.password;
      this.props.login(user);
    }
    user.password = false;
    this.props.signup(user);
    this.setState(initialState);
  }

  render() {
    const { login } = this.props;

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
          {this.state.login ? "Login": "Sign Up"}
        </button>
        <button onClick={() => this.setMode()}>
          Click to {this.state.login ? "Sign Up": "Login"}
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(login(user));
    },
    signup: (user) => {
      dispatch(signup(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
