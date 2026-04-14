import { getTypeColor } from "../utils/typeColor"

function PokemonCard({ pokemon, onSelect }) {
  return (
    <div
      className="card"
      onClick={() => onSelect(pokemon.name)}
      style={{
        cursor: "pointer",
        padding: "16px",
        borderRadius: "12px",
        textAlign: "center",
        backgroundColor: getTypeColor(pokemon.types[0].type.name), // vil kun have fat i main type
      }}
    >
      <p style={{ opacity: 0.7 }}>#{pokemon.id}</p>

      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}

export default PokemonCard
