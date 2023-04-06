import { useParams, useNavigate } from 'react-router-dom';

import { useGetPokemon } from '../../api';

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: details = {} } = useGetPokemon(id);

  if (isLoading) return (<div>Loading...</div>);

  const { name, abilities, types, sprites } = details;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {name}
      {(abilities) && (
        <>
          {abilities.map(item => {
            return (
              <div key={item.slot}>{item.ability.name}</div>
            )
          })}
        </>
      )}
      {(types) && (
        <>
          {types.map(item => {
            return (
              <div key={item.slot}>{item.type.name}</div>
            )
          })}
        </>
      )}
      {(sprites) && (
        <>
          <img src={sprites.back_default} alt="back sprite" />
          <img src={sprites.front_default} alt="front sprite" />
        </>
      )}
    </div>
  )
}
