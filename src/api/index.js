import { api, v2 } from '../config/axios';
import { useQueryWrapper, useInfiniteQueryWrapper } from '../config/react-query';

const pokeApi = {
  getAllPokemons: ({ pageParam = 0 }) => api.get(`/${v2}/pokemon/?limit=12&offset=${pageParam}`),
  getPokemon: (payload) => api.get(`/${v2}/pokemon/${payload}`),
  getPokemonSpecies: (payload) => api.get(`/${v2}/pokemon-species/${payload}`),
};

const pokemonList = 'pokemon-list';
export const useGetAllPokemons = () => useInfiniteQueryWrapper(
  [pokemonList],
  pokeApi.getAllPokemons,
  {
    getNextPageParam: (_lastPage, pages) => {
      const offset = pages[pages.length - 1].data.next ?
        pages[pages.length - 1].data.next.replace("https://pokeapi.co/api/v2/pokemon/?offset=", "").replace("&limit=12", "")
        :
        null;
      if (offset) {
        return offset
      } else {
        return undefined
      }
    }
  }
);

const pokemonDetails = 'pokemon-details';
export const useGetPokemon = (id) => useQueryWrapper(
  [pokemonDetails, id],
  () => pokeApi.getPokemon(id),
);

const pokemonSpecies = 'pokemon-species';
export const useGetPokemonSpecies = (id) => useQueryWrapper(
  [pokemonSpecies, id],
  () => pokeApi.getPokemonSpecies(id),
  {
    enabled: !!id,
  }
);
