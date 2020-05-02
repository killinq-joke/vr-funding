//dependencies
import React from "react"
import { connect } from "react-redux";
//components
import UserForm from "./UserForm"
import * as actionCreators from "../state/actionCreators";

const Signup = () => {
    return (
      <>
        <UserForm />
      </>
    );
}

function mapStateToProps(state) {
  return {
    signupForm: state.signupForm,
    spinner: state.spinner,
  };
}

export default connect(mapStateToProps, actionCreators)(Signup)