import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonsListItem({ name, url }) {
  const getId = () => url.split('/')[6];

  return (
    <>
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${getId()}`}>Show details</Link>
      </button>
    </>
  );
}
