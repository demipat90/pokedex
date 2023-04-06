import { api, v2 } from '../config/axios';
import { useQueryWrapper } from '../config/react-query';

const pokeApi = {
  getAllPokemons: () => api.get(`/${v2}/pokemon/?limit=892`),
  getPokemon: (payload) => api.get(`/${v2}/pokemon/${payload}`)
};

const pokemonList = 'pokemon-list';
export const useGetAllPokemons = () => useQueryWrapper(
  [pokemonList],
  () => pokeApi.getAllPokemons(),
);

const pokemonDetails = 'pokemon-details';
export const useGetPokemon = (id) => useQueryWrapper(
  [pokemonDetails, id],
  () => pokeApi.getPokemon(id),
);
