import image from "./images/bulbasaur.jpg";
export default function Showcase() {
  const favPokemon = "Pikachu";
  const pokeCharacteristics = {
    type: "Electric",
    move: "Thunderbolt",
  };
  return (
    <div>
      <h1>{favPokemon}'s</h1>
      <h2>Type: {pokeCharacteristics.type}</h2>
      <h2>Move: {pokeCharacteristics.move}</h2>
      <img src={image} alt="Bulbasaur" />
    </div>
  );
}
