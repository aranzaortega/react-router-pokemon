import React from 'react';
import { useState } from 'react';
import PokemonContext from './index';
import apiCall from '../../api';

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const pokemonsResult = await apiCall({
        url: 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100'
      });
      // Save into a state cons
      setPokemons(pokemonsResult.results);
    } catch (error) {
      // Save as the initial state
      setPokemons([]);
    }
  };

  return (
    // All children inherits
    <PokemonContext.Provider value={{ getPokemons, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}
