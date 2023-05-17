import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';

import { useGetPokemon, useGetPokemonSpecies } from '../../api';
import { zeroPadNumber } from "../../utils/text-formatter";
import { getPokemonSpeciesColorClass } from "../../utils/constants";
import { Types } from "./Types";

const traversePokemon = (id, dir) => {
  if (dir === "next") {
    return id === 1010 ? "/pokemon/1" : `/pokemon/${id + 1}`;
  } else if (dir === "prev") {
    return id === 1 ? "/pokemon/1010" : `/pokemon/${id - 1}`;
  } else {
    return "/";
  }
}

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: details = {} } = useGetPokemon(id);

  const { id: PokeId, name, abilities, types, sprites, stats, species, weight, height } = details;

  const { isLoading: isLoadingSpeciesData, data: { color, varieties, flavor_text_entries, capture_rate, egg_groups } = {} } = useGetPokemonSpecies(species?.name);

  if (isLoading && isLoadingSpeciesData) return (<div>Loading...</div>);

  const navLinkClasses = ({ isActive }) => (isActive ? 'mx-4 px-3 py-2 rounded-md bg-red-950 text-white' : 'mx-4 px-3 py-2 rounded-md');

  return (
    <div>
      <div className="flex justify-between">
        <button onClick={() => navigate(traversePokemon(PokeId, "prev"))}>Prev</button>
        <button onClick={() => navigate(traversePokemon(PokeId, "next"))}>Next</button>
      </div>
      <div className="flex flex-col md:flex-row items-stretch gap-8 h-[calc(100vh_-_20rem)] overflow-y-auto">
        <div className="basis-2/4">
          <div className="text-4xl mb-8">n {zeroPadNumber(PokeId, 4)}</div>
          <div className="flex justify-between items-start mb-8">
            <div className="capitalize text-5xl">{name}</div>
            <div className="flex gap-2">
              <Types types={types} />
            </div>
          </div>
          <div className={`flex justify-center rounded-3xl background-glass ${getPokemonSpeciesColorClass[color?.name]} bg-opacity-90 border-opacity-95`}>
            <img src={sprites.other["official-artwork"].front_default} alt="avatar" />
          </div>
        </div>
        <div className="basis-2/4">
          <nav className="flex mb-4">
            <NavLink to="" className={navLinkClasses} end>Info</NavLink>
            <NavLink to="forms" className={navLinkClasses} end>Forms</NavLink>
            <NavLink to="abilities" className={navLinkClasses} end>Abilities</NavLink>
            <NavLink to="stats" className={navLinkClasses} end>Stats</NavLink>
          </nav>
          <div className="mb-8">
            <Outlet context={{ species, abilities, stats, varieties, flavor_text_entries, weight, height, capture_rate, egg_groups }} />
          </div>
        </div>
      </div>
    </div>
  )
}
