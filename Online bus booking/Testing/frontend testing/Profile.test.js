import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "./Profile";

test("renders profile form and updates data", () => {
  render(<Profile />);

  const nameInput = screen.getByLabelText("Name:");
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  expect(nameInput.value).toBe("John Doe");
});
