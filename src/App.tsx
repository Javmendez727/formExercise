import "./App.css";
import { Component } from "react";
import InputsForm from "./components/InputsForm/InputsForm";
import ListForm from "./components/ListForm/ListForm";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <header className="header">
            <p>Form Add Users </p>
          </header>
          <div className="form-container">
            <InputsForm />
            <ListForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
