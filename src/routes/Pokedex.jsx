import { useEffect, useState } from "react"
import { fetchPokemonList, fetchPokemonDetails } from "../services/pokeApi"
import PokemonCard from "../components/PokemonCard"
import "./Pokedex.css"

function Pokedex() {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(0) // init value for page = 0
  const [hasNext, setHasNext] = useState(false)
  const [hasPrev, setHasPrev] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const PAGE_SIZE = 12

  const handleSelect = (name) => {
    console.log(`Selected pokemon: ${name}`) // temp
    setSelectedPokemon(name)
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
        <button disabled={!hasPrev} onClick={() => setPage((prev) => prev - 1)}>
          Previous
        </button>
        <span>Page {page + 1}</span>
        <button disabled={!hasNext} onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Pokedex
