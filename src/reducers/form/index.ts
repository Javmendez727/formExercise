import { AnyAction } from "redux";
import { validate as validateEmail } from "email-validator";
import actionTypes from "../../actions/actionTypes";

export interface formState {
  list: Array<any>;
  nameCustomer: string;
  nameState: string;
  nameError: boolean;
  lastNameCustomer: string;
  lastNameState: string;
  lastNameError: boolean;
  emailUser: string;
  emailUserState: string;
  emailUserErrorHelper: string;
  emailUserError: boolean;
  noteUser: string;
  noteUserState: string;
  noteUserError: boolean;
  enableButton: boolean;
}

export const INITIAL_STATE = {
  list: [],
  nameCustomer: "",
  nameState: "normal",
  nameError: true,
  lastNameCustomer: "",
  lastNameState: "normal",
  lastNameError: true,
  emailUser: "",
  emailUserState: "normal",
  emailUserErrorHelper: "",
  emailUserError: true,
  noteUser: "",
  noteUserState: "normal",
  noteUserError: true,
  enableButton: false,
};

const addUser = (state: formState) => {
  state.list.push({
    name: state.nameCustomer,
    lastName: state.lastNameCustomer,
    email: state.emailUser,
    note: state.noteUser,
  });
  return state.list;
};

const removeUser = (indexUser: number, state: formState) => {
  const newArray = state.list.filter((item, index) => index !== indexUser);

  return newArray;
};

export const checkEmptyInput = (value: string) => {
  const props = {
    actualValue: value,
    state: "normal",
    error: false,
  };
  if (!value) {
    props.state = "error";
    props.error = true;
  }
  return props;
};

const form = (
  state: formState = INITIAL_STATE,
  action: AnyAction = { type: null }
): formState => {
  switch (action.type) {
    case actionTypes.SET_NAME_USER:
      const nameInputState = checkEmptyInput(action.newValue);
      return {
        ...state,
        nameCustomer: action.newValue,
        nameState: nameInputState.state,
        nameError: nameInputState.error,
      };

    case actionTypes.SET_LASTNAME_USER:
      const lastNameInputState = checkEmptyInput(action.newValue);
      return {
        ...state,
        lastNameCustomer: action.newValue,
        lastNameState: lastNameInputState.state,
        lastNameError: lastNameInputState.error,
      };

    case actionTypes.SET_EMAIL_USER:
      const emailStateValidation = validateEmail(action.newValue)
        ? "normal"
        : "error";
      const emailStateEmpty = checkEmptyInput(action.newValue);
      const emailState =
        emailStateValidation === "normal" && emailStateEmpty.state === "normal"
          ? "normal"
          : "error";
      return {
        ...state,
        emailUser: action.newValue,
        emailUserState: emailState,
        emailUserError: emailState === "normal" ? false : true,
        emailUserErrorHelper:
          emailStateValidation === "error" && emailStateEmpty.state === "error"
            ? "Email is required"
            : "Must be a valid email",
      };

    case actionTypes.SET_NOTE_USER:
      const noteInputState = checkEmptyInput(action.newValue);
      return {
        ...state,
        noteUser: action.newValue,
        noteUserState: noteInputState.state,
        noteUserError: noteInputState.error,
      };
    case actionTypes.ENABLE_BUTTON_FORM:
      return {
        ...state,
        enableButton: action.newState,
      };
    case actionTypes.ADD_USER_LIST:
      return {
        ...state,
        list: addUser(JSON.parse(JSON.stringify(state))),
      };
    case actionTypes.REMOVE_USER_LIST:
      return {
        ...state,
        list: removeUser(action.indexUser, JSON.parse(JSON.stringify(state))),
      };
    case actionTypes.RESET_FORM_INPUTS:
      return {
        ...INITIAL_STATE,
        list: state.list,
      };
    default:
      return state;
  }
};

export default form;
