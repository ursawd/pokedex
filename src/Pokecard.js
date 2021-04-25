import "./Pokecard.css";
function Pokecard(props) {
  console.log("Entering Pokecard");
  console.log("Pokecard props", props);
  const { id, name, type, base_experience } = props.pokemon;
  console.log(id, name, type, base_experience);
  return (
    <div className="poke-card">
      <h4>{name}</h4>
      <img
        className="poke-card-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon"
      />

      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
