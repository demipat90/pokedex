import { useOutletContext } from "react-router-dom";

const formatLabel = (str) => {
  return str.toString().replaceAll("sprites.", "").replaceAll("_", " ") + " sprite";
}

export const Images = () => {
  const { sprites } = useOutletContext();
  return (
    <>
      <div>Images</div>
      {(sprites) && (
        <div>
          {sprites.back_default && <img src={sprites.back_default} alt={formatLabel("sprites.back_default")} title={formatLabel("sprites.back_default")} />}
          {sprites.front_default && <img src={sprites.front_default} alt={formatLabel("sprites.front_default")} title={formatLabel("sprites.front_default")} />}
          {sprites.back_shiny && <img src={sprites.back_shiny} alt={formatLabel("sprites.back_shiny")} title={formatLabel("sprites.back_shiny")} />}
          {sprites.front_shiny && <img src={sprites.front_shiny} alt={formatLabel("sprites.front_shiny")} title={formatLabel("sprites.front_shiny")} />}
          {sprites.back_female && <img src={sprites.back_female} alt={formatLabel("sprites.back_female")} title={formatLabel("sprites.back_female")} />}
          {sprites.front_female && <img src={sprites.front_female} alt={formatLabel("sprites.front_female")} title={formatLabel("sprites.front_female")} />}
          {sprites.back_shiny_female && <img src={sprites.back_shiny_female} alt={formatLabel("sprites.back_shiny_female")} title={formatLabel("sprites.back_shiny_female")} />}
          {sprites.front_shiny_female && <img src={sprites.front_shiny_female} alt={formatLabel("sprites.front_shiny_female")} title={formatLabel("sprites.front_shiny_female")} />}
        </div>
      )}
    </>
  )
}
