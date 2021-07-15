import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
  let params = useParams();
  const [characterInfo, setInfo] = useState(undefined);
  const [episode, setEpisode] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const { data: character } = await axios.get(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );

      const { data: episode } = await axios.get(character.episode[0]);

      setInfo(character);
      setEpisode(episode);
    };
    fetchData();
  }, [params]);

  if (!characterInfo) {
    return <span>Loading</span>;
  }
  return (
    <div className="mx-auto">
      <Character
        id={characterInfo.id}
        image={characterInfo.image}
        name={characterInfo.name}
        status={characterInfo.status}
        species={characterInfo.species}
        gender={characterInfo.gender}
        origin={characterInfo.origin.name}
        firstEpisode={episode?.name}
      ></Character>
    </div>
  );
};

export default CharacterInfo;
