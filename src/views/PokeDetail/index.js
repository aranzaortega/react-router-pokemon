import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import PokemonContext from '../../context/pokemons';
import PokeStats from './components/PokeStats';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

export default function PokeDetail() {
  const { id } = useParams();
  const {
    getPokemonDetail,
    pokemonDetail,
    isLoading,
    hasError,
    errorMessage
  } = useContext(PokemonContext);

  // When the id changes, ask for the pokemon's detail
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Loading pokemon..." />;
  }

  return (
    <div>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <h3>Information</h3>
          <p>{`Name: ${pokemonDetail?.name}`}</p>
          <p>{`Weight: ${pokemonDetail?.weight} kgs`}</p>
          <p>{`Height: ${pokemonDetail?.height} cms`}</p>
          <div>
            <h3>Skills</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </>
      )}
    </div>
  );
}
