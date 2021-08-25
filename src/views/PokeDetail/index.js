import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import PokemonContext from '../../context/pokemons';

export default function PokeDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading } = useContext(
    PokemonContext
  );

  // When the id changes, ask for the pokemon's detail
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <p>Loading pokemon...</p>;
  }

  return (
    <div>
      <p>{`Name: ${pokemonDetail?.name}`}</p>
      <p>{`Weight: ${pokemonDetail?.weight} kgs`}</p>
      <p>{`Height: ${pokemonDetail?.height} cms`}</p>
    </div>
  );
}
