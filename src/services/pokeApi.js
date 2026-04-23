const BASE_URL = "https://pokeapi.co/api/v2"

// Offset til brug for pagination, holdes styr på i Pokedex.jsx
export async function fetchPokemonList(limit = 12, offset = 0)
{
    const result = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
    const data = await result.json()

    const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
            const result = await fetch(pokemon.url);
            return result.json();
        })
    )

    // Boolean for null check på hvorvidt der er pokemons før/efter den nuværende side
    // På første side har data.previous bare værdien null, samme med sidste sidste
    return {
        pokemon: detailedData,
        hasNext: Boolean(data.next),
        hasPrev: Boolean(data.previous),
    }
}

export async function fetchPokemonDetails(nameOrId)
{
    const result = await fetch(`${BASE_URL}/pokemon/${nameOrId}`)
    return result.json()
}

export async function fetchPokemonSpecies(nameOrId)
{
    const result = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`)
    return result.json()
}