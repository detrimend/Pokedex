import { getTypeColor } from "../utils/typeColor"
import "./TypeFrame.css"

function SingleType({ type }) {
  return (
    <div
      className="type-frame"
      style={{
        backgroundColor: getTypeColor(type.name),
      }}
      aria-label={`${type.name} frame`}
    >
      <p>{type.name}</p>
    </div>
  )
}

function TypeFrame({ pokemon }) {
  if (!pokemon?.types?.length) {
    return null
  }

  const [firstType, secondType] = pokemon.types

  return (
    <div className="type-frame-group">
      <SingleType type={firstType.type} />
      {secondType?.type ? <SingleType type={secondType.type} /> : null}
    </div>
  )
}

export default TypeFrame
