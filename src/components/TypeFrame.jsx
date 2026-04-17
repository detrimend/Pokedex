import { getTypeColor } from "../utils/typeColor"

function TypeFrame({ type }) {
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

export default TypeFrame
