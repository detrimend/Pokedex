import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchPokemonDetails } from "../services/pokeApi"

function PokemonDetails() {
  const { name } = useParams()
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchPokemonDetails(name)
        setPokemonDetails(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load pokemon details.",
        )
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [name])

  return (
    <>
      <div>
        <p>Pokemon: {name}</p>
      </div>
    </>
  )
}

export default PokemonDetails
