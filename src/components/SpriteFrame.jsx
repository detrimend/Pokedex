import "./SpriteFrame.css"

function SpriteFrame({ pokemon }) {
  if (!pokemon?.sprites?.front_default) {
    return null
  }

  return (
    <div className="sprite-frame" aria-label={`${pokemon.name} picture frame`}>
      <img
        className="sprite-frame__image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  )
}

export default SpriteFrame
