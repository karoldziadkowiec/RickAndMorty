import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharacterCard from "../components/CharacterCard.tsx";

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  image: "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20170429075536&path-prefix=pl",
};

describe("CharacterCard component", () => {
  it("renders character information", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Species: Human")).toBeInTheDocument();
    expect(screen.getByText("Status: Alive")).toBeInTheDocument();
  });

  it("renders character image", () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20170429075536&path-prefix=pl");
  });
});