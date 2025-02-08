import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import CharacterCard from "./CharacterCard.tsx";
import StatusFilter from "./StatusFilter.tsx";
import Pagination from "./Pagination.tsx";
import { fetchCharacters } from "../services/api/CharacterService.ts";
import "../styles/CharactersHome.css"

const CharactersHome = () => {
  const [characters, setCharacters] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCharacters(page, statusFilter)
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }, [page, statusFilter]);

  return (
    <div className = "CharactersHome">
      <h1>Rick and Morty - Characters</h1>

      <StatusFilter onChange={setStatusFilter} />
      <p></p>

      <Card.Group itemsPerRow={5}>
        {characters.map((char: any) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </Card.Group>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default CharactersHome;