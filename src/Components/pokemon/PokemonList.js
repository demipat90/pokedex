import { useEffect } from 'react';
import { Pokemon } from './Pokemon';

export const PokemonList = ({ searchAllPokemons, species }) => {

  useEffect(() => {
    searchAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pokemon--species--list">
      {species?.map(pokemon => (
        <Pokemon
          key={pokemon.name}
          id={pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
}
