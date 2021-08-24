import React from 'react';
import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemons';
import PokemonsList from './components/PokemonsList';

export default function Home() {
  const { getPokemons, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    // Catch because it is async
    getPokemons().catch(null);
  }, []);

  return (
    <div>
      <PokemonsList pokemons={pokemons} />
    </div>
  );
}
