import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const PokemonDetails = ({ getPokemon, details }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
