import { useOutletContext, Link } from "react-router-dom";

import { useGetPokemonSpecies } from "../../api";
import { defaultSpritePath } from "../../utils/constants";

const getPokeId = (str) => {
  return str.split("/")[6];
}

export const Forms = () => {
  const { species } = useOutletContext();
  const { isLoading, data: { varieties = [] } = {} } = useGetPokemonSpecies(species.name);

  if (isLoading) return "Loading...";

  return varieties?.map((variety, index) => {
    const pokeId = getPokeId(variety.pokemon.url);
    const imgPath = `${defaultSpritePath}/${pokeId}.png`;

    return (
      <Link to={`/pokemon/${pokeId}`} key={index}>
        <div className="flex items-center gap-8 background-glass rounded-lg p-5 mb-8">
          <img src={imgPath} alt={variety.pokemon.name} />
          <div className="capitalize">{variety.pokemon.name}</div>
        </div>
      </Link>
    )
  });
}
