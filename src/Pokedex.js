import Pokecard from "./Pokecard";
import "./Pokedex.css";
//----------------------------------------------------------------
function Pokedex({ pokemons, isWinner }) {
  return (
    <div className="pokedex">
      {pokemons.map((p) => {
        return (
          <div key={p.id}>
            <Pokecard pokemon={p} />
          </div>
        );
      })}
    </div>
  );
}
//--------------------------------------------------
export default Pokedex;
