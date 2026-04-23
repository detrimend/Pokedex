import SpriteFrame from "./SpriteFrame"
import TypeFrame from "./TypeFrame"
import AbilityFrame from "./AbilityFrame"
import "./DetailCard.css"

function DetailCard({ pokemon, flavorText }) {
  return (
    <section className="detail-card-grid">
      <div className="detail-card-grid__name">
        <h2>{pokemon.name}</h2>
      </div>
      <div className="detail-card-grid__sprite">
        <SpriteFrame pokemon={pokemon} />
      </div>
      <div className="detail-card-grid__types">
        <TypeFrame pokemon={pokemon} />
      </div>
      <div className="detail-card-grid__description">
        <p>{flavorText}</p>
      </div>
      <div className="detail-card-grid__abilities">
        <AbilityFrame pokemon={pokemon} />
      </div>
    </section>
  )
}

export default DetailCard
