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
  const hand1Score = computeScore(firstHand);
  const hand2Score = computeScore(secondHand);
  const winner = hand1Score > hand2Score ? 1 : 2;

  return (
    <div>
      <h3>Deck 1 - {hand1Score}</h3>
      {winner === 1 ? <h2>Winner</h2> : <></>}
      <Pokedex pokemons={firstHand} score={hand1Score} />;
      <h3>Deck 2 - {hand2Score}</h3>
      {winner === 2 ? <h2>Winner</h2> : <></>}
      <Pokedex pokemons={secondHand} score={hand2Score} />;
    </div>
  );
}
//---------------------------------------------------------
function computeScore(hand) {
  const score = hand.reduce((total, item) => {
    return total + item.base_experience;
  }, 0);
  return score;
}
//---------------------------------------------------------
function drawHands(pokemonsList) {
  let firstHand = [];
  let secondHand = [];
  let usedNums = [];
  let i = 0;
  while (usedNums.length < 8) {
    let rand = Math.floor(Math.random() * 8);
    if (!usedNums.includes(rand)) {
      if (i < 4) {
        firstHand[i] = pokemonsList[rand];
      } else {
        secondHand[i - 4] = pokemonsList[rand];
      }
      i++;
      usedNums.push(rand);
    }
  }
  return { firstHand, secondHand };
}
//--------------------------------------------------------
export default Pokegame;
