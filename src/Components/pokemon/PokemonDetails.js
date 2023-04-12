import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';

import { useGetPokemon } from '../../api';

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: details = {} } = useGetPokemon(id);

  if (isLoading) return (<div>Loading...</div>);

  const { name, height, weight, abilities, types, sprites } = details;

  return (
    <div>
      <div><button onClick={() => navigate("/")}>Back</button></div>
      <hr />
      <h2>Name: {name}</h2>
      <h5>Height: {height}</h5>
      <h5>Weight: {weight}</h5>
      <img src={sprites.other["official-artwork"].front_default} alt="image"/>
      <hr />
      <nav>
        <ul>
          <li><Link to="images">Images</Link></li>
          <li><Link to="abilities">Abilities</Link></li>
          <li><Link to="types">Types</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet context={{ sprites, abilities, types }} />
    </div>
  )
}
