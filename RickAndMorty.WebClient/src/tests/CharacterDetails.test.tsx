import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CharacterDetails from "../components/CharacterDetails.tsx";
import { fetchCharacterById } from "../services/api/CharacterService.ts";

jest.mock("../services/api/CharacterService.ts");

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  image: "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20170429075536&path-prefix=pl",
};

describe("CharacterDetails component", () => {
  it("fetches and displays character details", async () => {
    (fetchCharacterById as jest.Mock).mockResolvedValue(mockCharacter);

    render(
      <MemoryRouter initialEntries={["/character/1"]}>
        <Routes>
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
    expect(await screen.findByText("Species: Human")).toBeInTheDocument();
    expect(await screen.findByText("Status: Alive")).toBeInTheDocument();
  });

  it("displays loading state initially", () => {
    (fetchCharacterById as jest.Mock).mockResolvedValue(mockCharacter);

    render(
      <MemoryRouter initialEntries={["/character/1"]}>
        <Routes>
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});