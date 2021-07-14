import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
  let params = useParams();
  const [characterInfo, setInfo] = useState(undefined);
  const [episode, setEpisode] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      // axios
      //   .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      //   .then((res) => {
      //     console.log(params);
      //     setInfo(res.data);

      //     console.log(characterInfo.episode[0]);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
      const { data: character } = await axios.get(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );

      const { data: episode } = await axios.get(character.episode[0]);

      setInfo(character);
      setEpisode(episode);

      console.log(episode.name);
    };
    fetchData();
  }, [params, episode]);

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
    // <div>
    //    {JSON.stringify(params, 0, 2)}, {params.id}
    // </div> data && <List arr={data}
  );
};

export default CharacterInfo;
