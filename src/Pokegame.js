import Pokedex from "./Pokedex";
let pokemonsList = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];
let testArray1 = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
];
let testArray2 = [
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];
//------------------------------------------------------
function Pokegame() {
  const { firstHand, secondHand } = drawHands(pokemonsList);
  return (
    <div>
      <Pokedex pokemons={firstHand} />;
      <Pokedex pokemons={secondHand} />;
      {/* <Pokedex pokemons={testArray1} />;
      <Pokedex pokemons={testArray2} />; */}
    </div>
  );
}
//---------------------------------------------------------
function drawHands(pokemonsList) {
  let firstHand = [];
  let secondHand = [];
  let usedNums = [];

  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * 8);
    if (!usedNums.includes(rand)) {
      if (i < 4) {
        firstHand[i] = pokemonsList[i];
      } else {
        secondHand[i - 4] = pokemonsList[i];
      }
    }
  }
  console.log("firstHand", firstHand);
  console.log("secondHand", secondHand);

  return { firstHand, secondHand };
}
//--------------------------------------------------------
export default Pokegame;
