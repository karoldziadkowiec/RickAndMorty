import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import { fetchCharacterById } from "../services/api/CharacterService.ts";
import "../styles/CharacterDetails.css"

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    fetchCharacterById(id)
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error fetching character:", error));
  }, [id]);

  if(!character) 
    return <p>Loading...</p>;

  return (
    <div className = "CharacterDetails">
      <Card centered>
        <Image src={character.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          <Card.Meta>Species: <b>{character.species}</b></Card.Meta>
          <Card.Meta>Gender: <b>{character.gender}</b></Card.Meta>
          <Card.Description>Status: <b>{character.status}</b></Card.Description>
        </Card.Content>
      </Card>
      <span></span>

      <Button as={Link} to="/" primary>Back to Characters</Button>
    </div>
  );
};

export default CharacterDetails;