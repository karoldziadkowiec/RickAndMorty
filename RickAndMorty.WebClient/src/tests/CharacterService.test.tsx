import axios from "axios";
import { fetchCharacters, fetchCharacterById } from "../services/api/CharacterService.ts";
import RickAndMortyApiURL from "../config/RickAndMortyApi.tsx";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("CharacterService API", () => {
  it("fetchCharacters should return character data", async () => {
    const mockData = {
      results: [{ id: 1, name: "Rick Sanchez" }],
      info: { pages: 2 },
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchCharacters(1, "");
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${RickAndMortyApiURL}/?page=1&status=`);
  });

  it("fetchCharacterById should return a single character", async () => {
    const mockData = { id: 1, name: "Rick Sanchez" };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchCharacterById("1");
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${RickAndMortyApiURL}/1`);
  });

  it("should handle API errors", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network error"));
    
    await expect(fetchCharacters(1, "")).rejects.toThrow("Network error");
  });
});