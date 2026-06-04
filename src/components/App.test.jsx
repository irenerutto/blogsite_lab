import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("renders blog name passed as a prop", () => {
  render(<Header name="Irene's Personal Blog" />);

  const heading = screen.getByText("Irene's Personal Blog");

  expect(heading).toBeInTheDocument();
});