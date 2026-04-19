import "./SpriteFrame.css"
import { getTypeColor } from "../utils/typeColor"

function SpriteFrame({ pokemon }) {
  if (!pokemon?.sprites?.front_default) {
    return null
  }

  const [firstType, secondType] = pokemon.types

  return (
    <div
      className="sprite-frame"
      style={{
        background: `linear-gradient(135deg, ${getTypeColor(firstType.type.name)} 0%, ${secondType?.type ? getTypeColor(secondType.type.name) : getTypeColor(firstType.type.name)} 100%)`,
      }}
      aria-label={`${pokemon.name} picture frame`}
    >
      <img
        className="sprite-frame__image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  )
}

export default SpriteFrame
