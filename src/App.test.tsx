import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./common/store";

test("renders title from App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Form Add Users/i);
  expect(linkElement).toBeInTheDocument();
});
