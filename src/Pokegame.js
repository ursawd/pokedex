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
//------------------------------------------------------
function Pokegame() {
  const { firstHand, secondHand } = drawHands(pokemonsList);
  const testArray1 = [1, 2, 3, 4, 5, 6];
  const testArray2 = [
    { number: 1, name: "dummy" },
    { number: 2, name: "john" },
  ];
  console.log("draw hand results", firstHand, secondHand);
  console.log("test arrays results", testArray1, testArray2);
  return (
    <div>
      <Pokedex pokemons={secondHand} />;
      <Pokedex pokemons={firstHand} />;
      <Pokedex pokemons={testArray1} />;
      <Pokedex pokemons={testArray2} />;
    </div>
  );
}
//---------------------------------------------------------
function drawHands(pokemonsList) {
  //initize arrays to hold hand of 4 pokemon records
  let firstHand = [];
  let secondHand = [];
  //Loop through list of 8 pokemon records & randomly select a pokemon from the
  //list, add the first 4 randomly selected records to firstHand and next 4 random records
  //to secondHand, removing the selected record from the original array after each random
  //selection. This assures no record is used more than once.
  for (let i = 1; i <= 8; i++) {
    let arrayLength = pokemonsList.length;
    let randPokemon = pokemonsList[Math.floor(Math.random() * arrayLength)];
    if (i < 5) {
      firstHand.push(randPokemon);
    } else {
      secondHand.push(randPokemon);
    }
    //remove record just selected from original array
    let index = pokemonsList.indexOf(randPokemon);
    pokemonsList.splice(index, 1);
  }
  return { firstHand, secondHand };
}
//--------------------------------------------------------
export default Pokegame;
