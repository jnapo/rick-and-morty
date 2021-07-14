import axios from "axios";
import Character from "./Character";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PersonList = () => {
  const [page, setPage] = useState(1);
  const [all, setAll] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(all);
  //const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        console.log(1);
        setAll(res.data.results);
        // setInfo(res.data.info);
        // console.log(info["prev"]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  useEffect(() => {
    //const filter = all.filter(all )

    console.log(search);
  }, [search]);
  // useEffect(() => {
  //   const filter = states.filter(state => {
  //     return state.name.toLowerCase().includes(search.toLowerCase());
  //   });

  //   setFilteredStates(filter);
  // }, [search]);

  return (
    <div>
      <br></br>
      <div className="bg-white shadow p-4 flex">
        <span className="w-auto flex justify-end items-center text-gray-500 p-2"></span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded p-2"
          type="text"
          placeholder="Search name of the character"
        />
        <button className="bg-purple-600 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {all.map((character) => (
          <Link to={`/character/${character.id}`}>
            <div
              className=" container mx-auto box-border h-100% w-100% p-10 m-10 border-4 rounded-lg"
              key={character.id}
            >
              <p className="text-white text-center text-2xl font-bold">
                {character.id}.{character.name}
              </p>
              <br></br>
              <img
                className="mx-auto rounded-lg"
                src={character.image}
                alt="Character"
              />
            </div>
            {/* <Character
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
            ></Character> */}
          </Link>
        ))}
      </div>

      <div className="mx-auto">
        {page > 1 && (
          <button
            className="bg-blue-900 hover:bg-purple-500 text-white font-bold py-2 px-4 m-5 rounded-l"
            onClick={() => setPage(page - 1)}
          >
            Previous Page
          </button>
        )}
        {page < 36 && (
          <button
            className="bg-blue-900 hover:bg-purple-500 text-white font-bold py-2 px-4 m-5rounded-l"
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonList;
