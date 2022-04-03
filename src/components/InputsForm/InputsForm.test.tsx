import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { mockStore } from "../../common/test";
import { INITIAL_STATE } from "../../reducers/form";
import InputsForm from "./InputsForm";
describe("InputsForm component", () => {
  test("should render all the properties", () => {
    const store = mockStore();
    store.getState = () => ({
      form: {
        ...INITIAL_STATE,
        list:[],
        nameCustomer: "Jose",
        nameError: false,
        lastNameCustomer: "Vallejo",
        lastNameError: false,
        emailUser: "openloopJose@asdas.com",
        emailUserError: false,
        noteUser: "holaa",
        noteUserError: false,
      },
    });
    render(
      <Provider store={store}>
        <InputsForm />
      </Provider>
    );
    const buttonAdd = screen.getByRole("button");
    expect(buttonAdd).toBeInTheDocument();

    const nameInputElement = screen.getByTestId("firstNameInput");
    expect(nameInputElement).toBeInTheDocument();
    const lastNameInput = screen.getByTestId("lastNameInput");
    expect(lastNameInput).toBeInTheDocument();
    const emailInputElement = screen.getByTestId("emailInput");
    expect(emailInputElement).toBeInTheDocument();
    const noteInputElement = screen.getByTestId("noteInput");
    expect(noteInputElement).toBeInTheDocument();
  });
});
