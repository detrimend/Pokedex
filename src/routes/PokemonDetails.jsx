import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { fetchPokemonDetails, fetchPokemonSpecies } from "../services/pokeApi"
import BackButton from "../components/BackButton"
import DetailCard from "../components/DetailCard"
import "./PokemonDetails.css"

function PokemonDetails() {
  const { name } = useParams()
  const { state } = useLocation()
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const [flavorText, setFlavorText] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fromPage =
    Number.isInteger(state?.fromPage) && state.fromPage > 0
      ? state.fromPage
      : null
  const backTo = fromPage ? `/?page=${fromPage}` : "/"

  useEffect(() => {
    if (!name) {
      setPokemonDetails(null)
      setFlavorText("")
      setError("No pokemon selected.")
      setLoading(false)
      return
    }

    let isCancelled = false

    async function loadData() {
      setLoading(true)
      setError(null)
      setPokemonDetails(null)
      setFlavorText("")

      try {
        const [detailsData, speciesData] = await Promise.all([
          fetchPokemonDetails(name),
          fetchPokemonSpecies(name),
        ])

        if (!detailsData?.id) {
          throw new Error("Pokemon not found.")
        }

        if (!isCancelled) {
          const englishEntry = speciesData?.flavor_text_entries?.find(
            (entry) => entry?.language?.name === "en",
          )
          const normalizedFlavorText = englishEntry?.flavor_text
            ? englishEntry.flavor_text.replace(/[\f\n\r]+/g, " ").trim()
            : "No flavor text available."

          setPokemonDetails(detailsData)
          setFlavorText(normalizedFlavorText)
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
        <BackButton to={backTo} />
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="details-page">
        <BackButton to={backTo} />
        <p>{error}</p>
      </div>
    )
  }

  if (!pokemonDetails) {
    return (
      <div className="details-page">
        <BackButton to={backTo} />
        <p>No details available.</p>
      </div>
    )
  }

  return (
    <div className="details-page">
      <BackButton to={backTo} />
      <DetailCard pokemon={pokemonDetails} flavorText={flavorText} />
    </div>
  )
}

export default PokemonDetails
