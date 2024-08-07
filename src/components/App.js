import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([...pokemon]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => {
        setPokemon(data);
        setDisplayedPokemon(data);
      });
  }, []);

  function onPokeSearch(search) {
    const updatedPokeList = pokemon.filter((poke) =>
      poke.name.includes(search)
    );
    setDisplayedPokemon(updatedPokeList);
  }

  function onNewPokemonSubmit(newPokemon) {
    setDisplayedPokemon([...pokemon, newPokemon]);
  }

  return (
    <div className="App">
      <PokemonPage
        pokemons={displayedPokemon}
        onPokeSearch={onPokeSearch}
        onNewPokemonSubmit={onNewPokemonSubmit}
      />
    </div>
  );
}

export default App;
