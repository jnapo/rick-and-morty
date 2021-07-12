const Character = ({ id, image, children }) => {
  return (
    <li key={id}>
      {children}
      <br></br>
      <img src={image} />
    </li>
  );
};

export default Character;
