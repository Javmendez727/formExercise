import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import ListForm from "./ListForm";
import { mockStore } from "../../common/test";
import { INITIAL_STATE } from "../../reducers/form";
describe("ListForm component", () => {
  test("should render all the properties", () => {
    const store = mockStore();
    store.getState = () => ({
      form: {
        ...INITIAL_STATE,
        list: [
          {
            name: "jose",
            lastName: "vallejo",
            email: "josevallejo@hotmail.com",
            note: "HolaBuenDia",
          },
        ],
      },
    });
    render(
      <Provider store={store}>
        <ListForm />
      </Provider>
    );
    const buttonItem = screen.getByRole("button");
    expect(buttonItem).toBeInTheDocument();
    const listUser = screen.getByTestId("listUser");
    expect(listUser).toBeInTheDocument();
  });
});
