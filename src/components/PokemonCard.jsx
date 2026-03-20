import React from "react"

function PokemonCard({pokemon, onSelect}) {
    return (
        <div
            className = "card"
            onClick = {() => onSelect(pokemon.name)}
            style = {{
                cursor: "pointer",
                padding: "16px",
                borderRadius: "12px",
                textAlign: "center",
                backgroundColor: getTypeColor(pokemon.types[0].type.name), // vil kun have fat i main type
            }}
        >
            <p style={{ opacity: 0.7}}>#{pokemon.id}</p>

            <h2 style={{ textTransform: "capitalize" }}>
                {pokemon.name}
            </h2>

            <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        </div>
    )
}

// Hugget fra https://github.com/justingolden21/pokemon-types-css
function getTypeColor(type) {
  const colors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  }

  return colors[type]
}

export default PokemonCard