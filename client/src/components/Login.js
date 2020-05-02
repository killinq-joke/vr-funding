//dependencies
import React from "react"
import { connect } from "react-redux";
//components
import UserForm from "./UserForm"
import * as actionCreators from "../state/actionCreators";

const Login = () => {
  return (
    <>
      <UserForm />
    </>
  );
}

function mapStateToProps(state) {
  return {
    loginForm: state.loginForm,
    spinner: state.spinner,
  };
}

export default connect(mapStateToProps, actionCreators)(Login);