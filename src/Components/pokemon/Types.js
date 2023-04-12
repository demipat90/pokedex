import { useOutletContext } from "react-router-dom";

export const Types = () => {
  const { types } = useOutletContext();

  return (
    <>
      <div>Types</div>
      {(types) && (
        <>
          {types.map(item => {
            return (
              <div key={item.slot}>{item.type.name}</div>
            )
          })}
        </>
      )}
    </>
  )
}
