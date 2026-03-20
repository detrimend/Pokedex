const BASE_URL = "https://pokeapi.co/api/v2"

export async function fetchPokemonList(limit = 12) 
{
    const result = await fetch(`${BASE_URL}/pokemon?limit=${limit}`)
    const data = await result.json()

    const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
            const result = await fetch(pokemon.url);
            return result.json();
        })
    )

    return detailedData
}

export async function fetchPokemonDetails(nameOrId)
{
    const result = await fetch(`${BASE_URL}/pokemon/${nameOrId}`)
    return result.json
}