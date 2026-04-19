import { getTypeColor } from "../utils/typeColor"
import "./PokemonCard.css"

function PokemonCard({ pokemon, onSelect }) {
  return (
    <div
      className="card"
      onClick={() => onSelect(pokemon.name)}
      style={{
        backgroundColor: getTypeColor(pokemon.types[0].type.name), // vil kun have fat i main type
      }}
    >
      <p >#{pokemon.id}</p>

      <h2>{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}

export default PokemonCard
