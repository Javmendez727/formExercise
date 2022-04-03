import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import actions from "../../actions";
import actionTypes from "../../actions/actionTypes";
import { ReduxState } from "../../common/store";
import "./ListForm.css";

class ListForm extends Component<ReduxProps> {
  removeUser(index: number){
    this.props.removeUserFromList(actionTypes.REMOVE_USER_LIST, index)
  }
  render() {
    return (
      <div className="listForm-container">
        <div className="list">
          <ul>
            {this.props.list.map((item, index) => (
              <div className="item">
                <li key={index}>{`${item.name} ${item.lastName} | ${item.note} | ${item.email}`}</li>
                <button className="buttonRemove" onClick={()=> this.removeUser(index)}> Remove </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { form } = state;
  const { list } = form;
  return {
    list,
  };
};

const { addListContent,removeUserFromList } = actions;

const connector = connect(mapStateToProps, {
  addListContent,
  removeUserFromList,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ListForm);
