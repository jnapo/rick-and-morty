import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "./Character";
const PersonList = (props) => {
  const { id } = props;
  const [characters, setCharacters] = useState([]);

  const [all, setAll] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10`)
      .then((res) => {
        console.log(res.data[1].name);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        // console.log(res.data[1].name);
        setAll(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <ul>
      {characters.map((character, idx, arr) => (
        <Character id={character.id} image={character.image}>
          {character.name}
          <button> BTYN</button>
        </Character>
      ))}

      {all.map((character) => (
        <Character
          id={character.id}
          image={character.image}
          name={character.name}
        ></Character>
      ))}
    </ul>
  );
};

export default PersonList;
