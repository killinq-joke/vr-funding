//dependencies
import React from "react"
import { connect } from "react-redux";
//components
import * as actionCreators from "../state/actionCreators";

const Login = () => {
  return (
    <>
      <form>
        <label>
          username:
          <input />
        </label>
        <label>
          password:
          <input />
        </label>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    userForm: state.userForm,
    spinner: state.spinner,
  };
}

export default connect(mapStateToProps, actionCreators)(Login);