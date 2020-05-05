//dependencies
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
//components
import * as actionCreators from "../state/actionCreators";

const Signup = ({ userForm, changeHandler, onSignup }) => {
  const history = useHistory();
  return (
    <>
      <form>
        <label>
          username:
          <input
            name="username"
            onChange={changeHandler}
            value={userForm.username}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            onChange={changeHandler}
            value={userForm.password}
          />
        </label>
        <button type="button" onClick={() => onSignup(userForm, history)}>
          signup
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

export default connect(mapStateToProps, actionCreators)(Signup);
