import * as types from "./actionTypes";

const initialUserFormState = {
  username: "",
  password: "",
};

export function userFormReducer(state = initialUserFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      const name = action.payload.name;
      const value = action.payload.value;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
