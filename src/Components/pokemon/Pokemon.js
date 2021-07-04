import React from 'react';
import {Link} from 'react-router-dom';

const Pokemon = (props) => {
  const { pokemon, id } = props;
  return (
    <div className="pokemon--species">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img src={`/sprites/${id}.png`} alt={pokemon.name}/>
          </div>
          <div className="pokemon--species--name"> {pokemon.name} </div>
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
