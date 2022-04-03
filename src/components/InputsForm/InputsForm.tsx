import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ReduxState } from "../../common/store";
import actions from "../../actions/";

import Inputs from "./Inputs/Inputs";
import "./InputsForm.css";
import actionTypes from "../../actions/actionTypes";

let inputRef = React.createRef<HTMLInputElement>();

class InputsForm extends Component<ReduxProps> {
  constructor(props: ReduxProps) {
    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeNote = this.handleChangeNote.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (!newValue) {
      this.props.updateInputContent(newValue, actionTypes.SET_NAME_USER);
      return;
    }
    this.props.updateInputContent(newValue, actionTypes.SET_NAME_USER);
  };

  handleChangeLastName = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (!newValue) {
      this.props.updateInputContent(newValue, actionTypes.SET_LASTNAME_USER);
      return;
    }
    this.props.updateInputContent(newValue, actionTypes.SET_LASTNAME_USER);
  };

  handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.props.updateInputContent(newValue, actionTypes.SET_EMAIL_USER);
  };

  handleChangeNote = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (!newValue) {
      this.props.updateInputContent(newValue, actionTypes.SET_NOTE_USER);
      return;
    }
    this.props.updateInputContent(newValue, actionTypes.SET_NOTE_USER);
  };
  disableButton() {
    return (
      this.props.nameError ||
      this.props.lastNameError ||
      this.props.emailUserError ||
      this.props.noteUserError
    );
  }
  addUser() {
    this.props.addListContent(actionTypes.ADD_USER_LIST);
    this.props.resetValuesInputs(actionTypes.RESET_FORM_INPUTS);
    if (inputRef.current) inputRef.current.focus();
  }
  componentDidMount() {
    if (inputRef.current) inputRef.current.focus();
  }

  render() {
    return (
      <div className="inputForm-container">
        <Inputs
          title="First Name"
          testId="firstNameInput"
          autofocus={inputRef}
          state={this.props.nameState}
          errorHelper="First Name is required"
          currentValue={this.props.nameCustomer}
          handleChange={this.handleChangeName}
        />
        <Inputs
          title="Last Name"
          testId="lastNameInput"
          errorHelper="Last Name is required"
          state={this.props.lastNameState}
          currentValue={this.props.lastNameCustomer}
          handleChange={this.handleChangeLastName}
        />
        <Inputs
          title="Email"
          testId="emailInput"
          errorHelper={this.props.emailUserErrorHelper}
          state={this.props.emailUserState}
          currentValue={this.props.emailUser}
          handleChange={this.handleChangeEmail}
        />
        <Inputs
          title="Note"
          testId="noteInput"
          errorHelper="Note is required"
          state={this.props.noteUserState}
          currentValue={this.props.noteUser}
          handleChange={this.handleChangeNote}
        />

        <button
          className="buttonAdd"
          data-testid="buttonAdd"
          disabled={this.disableButton()}
          onClick={this.addUser}
        >
          + Add User
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { form } = state;
  const {
    nameCustomer,
    nameState,
    nameError,
    lastNameCustomer,
    lastNameState,
    lastNameError,
    emailUser,
    emailUserState,
    emailUserError,
    emailUserErrorHelper,
    noteUser,
    noteUserState,
    noteUserError,
    list,
  } = form;
  return {
    nameCustomer,
    nameState,
    nameError,
    lastNameCustomer,
    lastNameState,
    lastNameError,
    emailUser,
    emailUserState,
    emailUserError,
    emailUserErrorHelper,
    noteUser,
    noteUserState,
    noteUserError,
    list,
  };
};

const {
  enableButtonUser,
  updateInputContent,
  addListContent,
  resetValuesInputs,
} = actions;

const connector = connect(mapStateToProps, {
  enableButtonUser,
  updateInputContent,
  addListContent,
  resetValuesInputs,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(InputsForm);
