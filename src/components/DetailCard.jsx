import SpriteFrame from "./SpriteFrame"
import TypeFrame from "./TypeFrame"
import "./DetailCard.css"

function DetailCard({ pokemon }) {
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          varius, leo ut ornare maximus, lorem turpis gravida purus, commodo
          ornare turpis ipsum in dui. Praesent vel dui at dui consectetur mattis
          at et massa. Quisque aliquam sodales ex nec lobortis. Pellentesque
          quis imperdiet sapien, eu aliquet lacus. In finibus euismod urna, at
          rutrum purus iaculis non. Nullam tristique est libero, vel semper
          nulla bibendum nec.
        </p>
      </div>
    </section>
  )
}

export default DetailCard
