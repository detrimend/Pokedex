import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { fetchPokemonList } from "../services/pokeApi"
import PokemonCard from "../components/PokemonCard"
import "./Pokedex.css"

function Pokedex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageParam = Number(searchParams.get("page") ?? "1")
  const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam - 1 : 0

  const [pokemon, setPokemon] = useState([])
  const [hasNext, setHasNext] = useState(false)
  const [hasPrev, setHasPrev] = useState(false)
  const navigate = useNavigate()

  const PAGE_SIZE = 12

  const setPageInUrl = (nextPage) => {
    setSearchParams({ page: String(nextPage + 1) })
  }

  const handleSelect = (name) => {
    navigate(`/pokemon/${name}`, { state: { fromPage: page + 1 } })
  }

  useEffect(() => {
    async function loadData() {
      const offset = page * PAGE_SIZE
      const data = await fetchPokemonList(PAGE_SIZE, offset)
      setPokemon(data.pokemon)
      setHasNext(data.hasNext)
      setHasPrev(data.hasPrev)
    }

    loadData()
  }, [page])

  return (
    <>
      <div className="grid">
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} onSelect={handleSelect} />
        ))}
      </div>

      <div className="pagination-controls">
        <button disabled={!hasPrev} onClick={() => setPageInUrl(page - 1)}>
          Previous
        </button>
        <span>Page {page + 1}</span>
        <button disabled={!hasNext} onClick={() => setPageInUrl(page + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Pokedex
