import { api, v2 } from '../config/axios';
import { useQueryWrapper, useInfiniteQueryWrapper } from '../config/react-query';

const pokeApi = {
  getAllPokemons: ({pageParam = 0}) => {
    return api.get(`/${v2}/pokemon/?limit=12&offset=${pageParam}`)
  },
  getPokemon: (payload) => api.get(`/${v2}/pokemon/${payload}`)
};

const pokemonList = 'pokemon-list';
export const useGetAllPokemons = () => useInfiniteQueryWrapper(
  [pokemonList],
  pokeApi.getAllPokemons,
  {
    getNextPageParam: (lastPage, _pages) => {
      if(lastPage.data.next) {
        return lastPage.data.next.replace("https://pokeapi.co/api/v2/pokemon/?offset=", "").replace("&limit=12", "")
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
