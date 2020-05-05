//dependencies
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
//components
import * as actionCreators from "../state/actionCreators";

const Login = ({ userForm, changeHandler, onLogin }) => {
  const history = useHistory();

  return (
    <>
      <form>
        <label>
          username:
          <input name="username" onChange={changeHandler} />
        </label>
        <label>
          password:
          <input name="password" onChange={changeHandler} />
        </label>
        <button type="button" onClick={() => onLogin(userForm, history)}>
          login
        </button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {
    userForm: state.userForm,
    spinner: state.spinner,
  };
}

export default connect(mapStateToProps, actionCreators)(Login);
