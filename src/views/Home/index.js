import React from 'react';
import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemons';
import PokemonsList from './components/PokemonsList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

export default function Home() {
  const {
    getPokemons,
    pokemons,
    isLoading,
    hasError,
    errorMessage
  } = useContext(PokemonContext);

  useEffect(() => {
    // Catch because it is async
    getPokemons().catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Loading results..." />;
  }

  return (
    <>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <PokemonsList pokemons={pokemons} />
      )}
    </>
  );
}
