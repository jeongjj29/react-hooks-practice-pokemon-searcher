import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemons, onPokeSearch, onNewPokemonSubmit }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemonSubmit={onNewPokemonSubmit} />
      <br />
      <Search onPokeSearch={onPokeSearch} />
      <br />
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
