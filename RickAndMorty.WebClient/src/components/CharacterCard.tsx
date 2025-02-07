import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CharacterCardProperties } from "../models/CharacterCardProperties.tsx";

const CharacterCard: React.FC<CharacterCardProperties> = ({ character }) => {
  return (
    <Card as={Link} to={`/character/${character.id}`}>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          Species: <b>{character.species}</b>
        </Card.Meta>
        <Card.Meta>
          Gender: <b>{character.gender}</b>
        </Card.Meta>
        <Card.Description>Status: <b>{character.status}</b></Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;