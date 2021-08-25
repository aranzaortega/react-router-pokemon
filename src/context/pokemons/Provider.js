import React from 'react';
import { useState } from 'react';
import PokemonContext from './index';
import apiCall from '../../api';

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');

      const pokemonsResult = await apiCall({
        url: 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100'
      });
      // Save into a state cons
      setPokemons(pokemonsResult.results);
    } catch (error) {
      // Save as the initial state
      setPokemons([]);
      setHasError(true);
      setErrorMessage('Something is wrong, check your connetion');
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async id => {
    if (!id) Promise.reject('ID is required');
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');

      //throw new Error('Hey');
      
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
      });
      setPokemonDetail(pokemonDetail);
    } catch (error) {
      setPokemonDetail({});
      setHasError(true);
      setErrorMessage('Something is wrong, check your connetion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // All children inherits
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        hasError,
        errorMessage
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
