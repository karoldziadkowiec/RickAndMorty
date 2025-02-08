import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination.tsx";

describe("Pagination component", () => {
  it("disables Previous button on first page", () => {
    render(<Pagination page={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText("PREVIOUS")).toBeDisabled();
  });

  it("disables Next button on last page", () => {
    render(<Pagination page={5} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText("NEXT")).toBeDisabled();
  });

  it("calls onPageChange when clicking Next", () => {
    const mockOnPageChange = jest.fn();
    render(<Pagination page={2} totalPages={5} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText("NEXT"));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
});