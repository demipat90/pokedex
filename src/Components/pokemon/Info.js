import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";

import { filterByLanguage, renderFlavorText } from "../../utils/text-formatter";

const getRedFlavorEngText = (data) => {
  const result = data?.filter(item => item.language.name === "en" && item.version.name === "red");
  if (result?.length) return renderFlavorText(result[0].flavor_text);
  return false;
}

const getCategoryName = (data) => {
  const result = filterByLanguage(data, "en");
  if (result?.length) return result[0].genus.replace("Pokémon", "").trim();
  return false;
}

export const Info = () => {
  const { flavor_text_entries, weight, height, capture_rate, egg_groups, genera } = useOutletContext();
  const flavorText = getRedFlavorEngText(flavor_text_entries);
  const categoryName = getCategoryName(genera);
  return (
    <>
      <div className="background-glass rounded-lg p-5 mb-8">
        {flavorText && (<h3 className="text-white mb-8">{flavorText}</h3>)}
        {categoryName && (<h3 className="text-white mb-8">Category: {categoryName}</h3>)}
        {egg_groups && (
          <h3 className="text-white capitalize mb-8"> Egg Groups:
            { egg_groups?.map((item, index) => (<Fragment key={index}> {item.name}</Fragment>)) }
          </h3>
        )}
        {weight && (<h3 className="text-white mb-8">Weight: {weight / 10} kg</h3>)}
        {height && (<h3 className="text-white mb-8">Height: {height / 10} m</h3>)}
        {capture_rate && (<h3 className="text-white mb-8">Capture Rate: {capture_rate}</h3>)}
      </div>
    </>
  )
}
