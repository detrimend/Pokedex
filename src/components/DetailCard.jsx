import SpriteFrame from "./SpriteFrame"
import TypeFrame from "./TypeFrame"

function DetailCard({ pokemon }) {

  return (
    <>
      <SpriteFrame pokemon={pokemon}></SpriteFrame>
      <TypeFrame pokemon={pokemon}></TypeFrame>
    </>
  )
}

export default DetailCard
