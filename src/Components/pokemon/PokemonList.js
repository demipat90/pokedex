import { Fragment } from 'react';
import { useGetAllPokemons } from '../../api';
import { Pokemon } from './Pokemon';

export const PokemonList = () => {

  const { isLoading, data: { pages = [] } = {}, fetchNextPage, isFetching, isFetchingNextPage } = useGetAllPokemons();

  if (isLoading) return (<div>Loading...</div>);

  return (
    <>
      <div className="pokemon--species--list">
        {
          pages?.map((group, index) => {
            return (
              <Fragment key={index}>
                {
                  group?.data?.results?.map(pokemon => (
                    <Pokemon key={pokemon.name} id={pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')} pokemon={pokemon} />
                  ))
                }
              </Fragment>
            )
          })
        }
      </div>
      <div className="flex justify-center">
        <button
          onClick={fetchNextPage}
          className="rounded-md bg-red-950 px-3 py-2 text-white hover:bg-red-500"
        >
          Load More
        </button>
        {
          isFetching && !isFetchingNextPage ? "Fetching..." : null
        }
      </div>
    </>
  );
}
