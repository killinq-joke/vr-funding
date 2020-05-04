import * as types from "./actionTypes";
import axios from "../utils/axiosWithAuth";

export const changeHandler = (e) => (dispatch) => {
  dispatch({ type: types.INPUT_CHANGE, payload: e.target });

};

export const onSignup = (credentials, history) => (dispatch) => {
  dispatch({ type: types.SIGNUP });
  axios()
    .post("/auth/register", credentials)
    .then((res) => {
      console.log(res);
      history.push("/login")
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onLogin = (credentials, history) => (dispatch) => {
         dispatch({ type: types.LOGIN });
         axios()  
           .post("/auth/login", credentials)
           .then((res) => {
             localStorage.setItem("token", res.data.token);
             localStorage.setItem("user_id", res.data.id);
           })
           .catch((err) => {
             console.log(err);
           });
       };
