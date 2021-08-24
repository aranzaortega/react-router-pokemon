import React from 'react';
import { useContext } from 'react';
import PokemonContext from '../../context/pokemons';

export default function Four0Four() {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);

  return (
    <div>
      <p>Perdona, no se encontró lo que estabas buscando</p>
    </div>
  );
}
