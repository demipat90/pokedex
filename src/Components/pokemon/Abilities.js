import { useOutletContext } from "react-router-dom";

export const Abilities = () => {
  const { abilities } = useOutletContext();

  return abilities && abilities?.map(item => {
    return (
      <div className="flex items-center gap-8 background-glass rounded-lg p-5 mb-8" key={item.slot}>
        <h3 className="text-white capitalize">{item.ability.name}</h3>
        <p>{item.is_hidden ? "[ Hidden ]" : null}</p>
      </div>
    )
  })
}
