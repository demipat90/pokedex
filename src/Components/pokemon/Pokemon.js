import { Link } from 'react-router-dom';

export const Pokemon = ({ pokemon, id }) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <div className="pokemon--species">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img src={imgURL} alt={pokemon.name} />
          </div>
          <div className="pokemon--species--name">{pokemon.name}</div>
        </div>
      </Link>
    </div>
  );
}
