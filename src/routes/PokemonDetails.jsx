import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchPokemonDetails } from "../services/pokeApi"
import DetailCard from "../components/DetailCard"
import "./PokemonDetails.css"

function PokemonDetails() {
  const { name } = useParams()
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!name) {
      setPokemonDetails(null)
      setError("No pokemon selected.")
      setLoading(false)
      return
    }

    let isCancelled = false

    async function loadData() {
      setLoading(true)
      setError(null)
      setPokemonDetails(null)

      try {
        const data = await fetchPokemonDetails(name)

        if (!data?.id) {
          throw new Error("Pokemon not found.")
        }

        if (!isCancelled) {
          setPokemonDetails(data)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Failed to load pokemon details.",
          )
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isCancelled = true
    }
  }, [name])

  if (loading) {
    return (
      <div className="details-page">
        <Link to="/">Back to list</Link>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="details-page">
        <Link to="/">Back to list</Link>
        <p>{error}</p>
      </div>
    )
  }

  if (!pokemonDetails) {
    return (
      <div className="details-page">
        <Link to="/">Back to list</Link>
        <p>No details available.</p>
      </div>
    )
  }

  return (
    <div className="details-page">
      <Link to="/">Back to list</Link>
      <DetailCard pokemon={pokemonDetails} />
    </div>
  )
}

export default PokemonDetails
