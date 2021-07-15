import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PersonList = () => {
  const [page, setPage] = useState(1);
  const [all, setAll] = useState([]);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [timer, setTimer] = useState(null);

  const handleSearch = (event) => {
    timer && clearTimeout(timer);
    let value = event.target.value.toLowerCase();
    const newTimer = setTimeout(() => {
      setSearch(value);
      setPage(1);
    }, 500);
    setTimer(newTimer);
  };
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`, {
        params: {
          name: search,
          page,
          species,
          status,
          gender,
        },
      })
      .then((res) => {
        setAll(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page, search, status, species, gender]);

  return (
    <div>
      <br></br>
      <div className="flex justify-center p-4">
        <div className="bg-white shadow p-4 flex w-2/3 rounded-lg mx-auto">
          <span className="w-auto flex justify-end items-center text-gray-500 p-2"></span>
          <input
            onChange={(event) => handleSearch(event)}
            className="w-full rounded-lg p-2 placeholder-purple-600 placeholder-opacity-70"
            type="text"
            placeholder="Search name of the character"
          />
        </div>
        <select
          className="bg-white shadow p-4 flex w-1/5 rounded-lg mr-10 ml-10"
          onChange={(event) => setStatus(event.target.value)}
        >
          <option selected disabled hidden>
            Status
          </option>
          <option value="" className="text-purple-600">
            None
          </option>
          <option value="Alive" className="text-purple-600">
            Alive
          </option>
          <option value="Dead" className="text-purple-600">
            Dead
          </option>
          <option value="Unknown" className="text-purple-600">
            Unknown
          </option>
        </select>
        <select
          className="bg-white shadow p-4 flex w-1/5 rounded-lg mr-10 ml-10"
          onChange={(event) => setSpecies(event.target.value)}
        >
          <option selected disabled hidden>
            Species
          </option>
          <option value="" className="text-purple-600">
            None
          </option>
          <option value="Human" className="text-purple-600">
            Human
          </option>
          <option value="Alien" className="text-purple-600">
            Alien
          </option>
        </select>
        <select
          className="bg-white shadow p-4 flex w-1/5 rounded-lg mr-10 ml-10"
          onChange={(event) => setGender(event.target.value)}
        >
          <option selected disabled hidden>
            Gender
          </option>
          <option value="" className="text-purple-600">
            None
          </option>
          <option value="Female" className="text-purple-600">
            Female
          </option>
          <option value="Male" className="text-purple-600">
            Male
          </option>
          <option value="Genderless" className="text-purple-600">
            Genderless
          </option>
          <option value="Unknown" className="text-purple-600">
            Unknown
          </option>
        </select>
        <div className="bg-white shadow p-4 flex w-1/10 rounded-lg">
          <span className="w-auto flex justify-end items-center text-gray-500 p-2"></span>
          <input
            className="w-full rounded-lg p-2 placeholder-purple-600 placeholder-opacity-70"
            type="number"
            min={1}
            max={info.pages}
            value={page}
            placeholder="Page"
            onChange={(event) => setPage(event.target.value)}
          ></input>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {all.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <div className=" container mx-auto box-border h-100% w-100% p-10 m-10 border-4 rounded-lg">
              <p className="text-white text-center text-2xl font-bold">
                {/* {character.id}. */}
                {character.name}
              </p>
              <br></br>
              <img
                className="mx-auto rounded-lg"
                src={character.image}
                alt="Character"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        {info.prev !== null && (
          <button
            className="bg-green-500 hover:bg-purple-500 text-white font-bold py-2 px-4 m-5 rounded-lg"
            onClick={() => setPage((old) => old - 1)}
          >
            Previous Page
          </button>
        )}
        {info.next !== null && (
          <button
            className="bg-green-500 hover:bg-purple-500 text-white font-bold py-2 px-4 m-5 rounded-lg"
            onClick={() => setPage((old) => old + 1)}
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonList;
