const Character = ({
  id,
  image,
  name,
  status,
  species,
  gender,
  origin,
  firstEpisode,
}) => {
  return (
    <div
      className=" container mx-auto box-border h-100% w-100% p-10 m-10 border-4 rounded-lg"
      key={id}
    >
      <p className="text-white text-center text-2xl font-bold">
        {id}.{name}
      </p>
      <br></br>
      <div>
        <img className="mx-auto rounded-lg" src={image} alt="Character" />
        <p className="text-white text-center font-bold text-lg">
          Status : {status}
        </p>
        <p className="text-white text-center font-bold text-lg">
          Species : {species}
        </p>
        <p className="text-white text-center font-bold text-lg">
          Gender : {gender}
        </p>
        <p className="text-white text-center font-bold text-lg">
          Origin : {origin}
        </p>
        <p className="text-white text-center font-bold text-lg">
          First seen in : {firstEpisode}
        </p>
      </div>
    </div>
  );
};

export default Character;
