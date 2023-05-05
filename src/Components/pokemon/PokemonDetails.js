import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';

import { useGetPokemon } from '../../api';
import { zeroPadNumber } from "../../utils/text-formatter";

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: details = {} } = useGetPokemon(id);

  if (isLoading) return (<div>Loading...</div>);

  const { id: PokeId, name, abilities, types, sprites } = details;

  const navLinkClasses = ({ isActive }) => (isActive ? 'mx-4 px-3 py-2 rounded-md bg-red-950 text-white' : 'mx-4 px-3 py-2 rounded-md');

  return (
    <div>
      <div><button onClick={() => navigate(-1)}>Back</button></div>
      <div className="flex items-stretch">
        <div>
          <div>n {zeroPadNumber(PokeId, 3)}</div>
          <div>{name}</div>
          <div className="rounded-3xl bg-slate-600">
            <img src={sprites.other["official-artwork"].front_default} alt="avatar" />
          </div>
        </div>
        <div>
          <nav className="flex">
            <NavLink to="images" className={navLinkClasses}>Images</NavLink>
            <NavLink to="abilities" className={navLinkClasses}>Abilities</NavLink>
            <NavLink to="types" className={navLinkClasses}>Types</NavLink>
          </nav>
          <Outlet context={{ sprites, abilities, types }} />
        </div>
      </div>
    </div>
  )
}
