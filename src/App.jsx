import { useEffect, useState } from "react";
import { fetchPokemonList } from "./services/pokeApi";

function App() {
  const [pokemon, setPokemon] = useState([]);

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
        <div key={p.id} className="card">
          <p>#{p.id}</p>
          <h2>{p.name}</h2>
          <img src={p.sprites.front_default} alt={p.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
