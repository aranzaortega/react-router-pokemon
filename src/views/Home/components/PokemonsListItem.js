import React from 'react';

export default function PokemonsListItem({ name, url }) {
  return (
    <>
      <p>{name}</p>
      <button>Show details</button>
    </>
  );
}
