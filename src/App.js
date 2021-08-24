import React from 'react';
import './style.css';
import Routes from './routes';
import PokemonsProvider from './context/pokemons/Provider';

export default function App() {
  return (
    <PokemonsProvider>
      <Routes />
    </PokemonsProvider>
  );
}
