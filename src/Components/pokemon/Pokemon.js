import { Link } from 'react-router-dom';

export const Pokemon = ({ pokemon, id }) => {
  return (
    <div className="pokemon--species">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} />
          </div>
          <div className="pokemon--species--name"> {pokemon.name} </div>
        </div>
      </Link>
    </div>
  );
}
