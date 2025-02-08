import { render, screen, fireEvent } from "@testing-library/react";
import StatusFilter from "../components/StatusFilter.tsx";

describe("StatusFilter component", () => {
  it("calls onChange when selecting a status", () => {
    const mockOnChange = jest.fn();
    render(<StatusFilter onChange={mockOnChange} />);

    const dropdown = screen.getByRole("listbox");
    fireEvent.change(dropdown, { target: { value: "alive" } });

    expect(mockOnChange).toHaveBeenCalledWith("alive");
  });
});