import SpriteFrame from "./SpriteFrame"
import TypeFrame from "./TypeFrame"

function DetailCard({ pokemon }) {
  return (
    <>
      <SpriteFrame pokemon={pokemon}></SpriteFrame>
      <TypeFrame type={pokemon.types[0].type}></TypeFrame>
    </>
  )
}

export default DetailCard
