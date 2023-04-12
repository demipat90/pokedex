import { useOutletContext } from "react-router-dom";

export const Abilities = () => {
  const { abilities } = useOutletContext();

  return (
    <>
      <div>Abilities</div>
      {(abilities) && (
        <>
          {abilities.map(item => {
            return (
              <div key={item.slot}>{item.ability.name}</div>
            )
          })}
        </>
      )}
    </>
  )
}
