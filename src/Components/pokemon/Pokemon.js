import { Link } from 'react-router-dom';

import { originalArtworkSpritePath } from "../../utils/constants";

export const Pokemon = ({ pokemon, id }) => {
  return (
    <div className="pokemon--species">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img src={`${originalArtworkSpritePath}/${id}.png`} alt={pokemon.name} />
          </div>
          <div className="pokemon--species--name capitalize">{pokemon.name}</div>
        </div>
      </Link>
    </div>
  );
}
