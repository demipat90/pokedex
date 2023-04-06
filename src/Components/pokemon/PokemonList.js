import { useGetAllPokemons } from '../../api';
import { Pokemon } from './Pokemon';

export const PokemonList = () => {

  const { isLoading, data: { results = [] } = {} } = useGetAllPokemons();

  if (isLoading) return (<div>Loading...</div>);

  return (
    <div className="pokemon--species--list">
      {results?.map(pokemon => (
        <Pokemon key={pokemon.name} id={pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')} pokemon={pokemon} />
      ))}
    </div>
  );
}
