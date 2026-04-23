import "./AbilityFrame.css"

export default function AbilityFrame({ pokemon }) {
  if (!pokemon?.abilities?.length) {
    return null
  }

  return (
    <section className="ability-frame">
      <h3>Abilities</h3>
      <ul className="ability-frame__list">
        {pokemon.abilities.map((entry) => (
          <li className="ability-frame__item" key={entry.ability.name}>
            <span className="ability-frame__name">
              {entry.ability.name.replace(/-/g, " ")}
            </span>
            {entry.is_hidden ? (
              <span className="ability-frame__hidden">(hidden)</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
