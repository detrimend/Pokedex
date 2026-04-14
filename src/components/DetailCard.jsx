import { getTypeColor } from "../utils/typeColor"

function DetailCard({ pokemon }) {
  return (
    <div
      className="card"
      style={{
        padding: "16px",
        borderRadius: "12px",
        backgroundColor: getTypeColor(pokemon.types[0].type.name), // vil kun have fat i main type
      }}
    >
      <p style={{ textAlign: "left", opacity: 0.7 }}>#{pokemon.id}</p>

      <h2 style={{ textAlign: "left", textTransform: "capitalize" }}>
        {pokemon.name}
      </h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}

export default DetailCard
