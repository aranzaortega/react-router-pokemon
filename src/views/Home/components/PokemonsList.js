import React from 'react';
import PokemonsListItem from './PokemonsListItem';

export default function PokemonsList({ pokemons }) {
  return (
    <div>
      {pokemons?.map((pokemon, index) => (
        <PokemonsListItem key={index} {...pokemon} />
      ))}
    </div>
  );
}
