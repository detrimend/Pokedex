import { useEffect, useState } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "../services/pokeApi";
import PokemonCard from "../components/PokemonCard";
import "./Pokedex.css";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);

  const handleSelect = (name) => {
    console.log(`Selected pokemon: ${name}`); // temp
  };

  useEffect(() => {
    async function loadData() {
      const data = await fetchPokemonList(12);
      setPokemon(data);
    }

    loadData();
  }, []);

  return (
    <div className="grid">
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} onSelect={handleSelect} />
      ))}
    </div>
  );
}

export default Pokedex;
