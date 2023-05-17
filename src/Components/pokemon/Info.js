import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";

export const Info = () => {
  const { flavor_text_entries, weight, height, capture_rate, egg_groups } = useOutletContext();

  return (
    <>
      {flavor_text_entries && (
        <div className="flex items-center gap-8 background-glass rounded-lg p-5 mb-8">
          <h3 className="text-white">{flavor_text_entries[0].flavor_text}</h3>
          <p className="capitalize">{flavor_text_entries[0].version.name}</p>
        </div>
      )}
      {egg_groups && (
        <div className="flex items-center gap-8 background-glass rounded-lg p-5 mb-8">
          <h3 className="text-white capitalize"> Egg Groups:
            {
              egg_groups?.map((item, index) => (<Fragment key={index}> {item.name}</Fragment>))
            }
          </h3>
        </div>
      )}
      <div className="flex flex-col items-start gap-8 background-glass rounded-lg p-5 mb-8">
        <h3 className="text-white">Weight: {weight / 10} kg</h3>
        <h3 className="text-white">Height: {height / 10} m</h3>
        <h3 className="text-white">Capture Rate: {capture_rate}</h3>
      </div>
    </>
  )
}
