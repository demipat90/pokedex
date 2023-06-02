import { useOutletContext, Link } from "react-router-dom";

import { useGetEvolutionChain } from "../../api";
import { defaultSpritePath } from "../../utils/constants";

const EvolutionChain = ({ chain }) => {
  const pokeId = chain?.species?.url.split("/")[6];
  const imgPath = `${defaultSpritePath}/${pokeId}.png`;

  if (chain?.evolves_to?.length < 1) {
    return (
      <Link to={`/pokemon/${pokeId}`}>
        <div className="flex flex-col items-center gap-8 background-glass rounded-lg p-5 w-[200px]">
          <img src={imgPath} alt={chain?.species?.name} />
          <div className="capitalize">{chain?.species?.name}</div>
        </div>
      </Link>
    );
  }
  return (
    <>
      <Link to={`/pokemon/${pokeId}`}>
        <div className="flex flex-col items-center gap-8 background-glass rounded-lg p-5 w-[200px]">
          <img src={imgPath} alt={chain?.species?.name} />
          <div className="capitalize">{chain?.species?.name}</div>
        </div>
      </Link>
      <div>evolves to &gt;</div>
      {chain?.evolves_to?.map((item, index) => {
        return (<><EvolutionChain chain={item} key={index} /></>);
      })}
    </>
  )
}

export const Evolution = () => {
  const { evolution_chain } = useOutletContext();

  const evolutionChainId = evolution_chain ? evolution_chain.url.split("/")[6] : null;
  const { isLoading, data: { chain = {} } = {} } = useGetEvolutionChain(evolutionChainId);

  if (isLoading) return (<div>Loading...</div>);

  return (
    <div className="flex flex-col gap-4">
      <EvolutionChain chain={chain} />
    </div>
  );
}
