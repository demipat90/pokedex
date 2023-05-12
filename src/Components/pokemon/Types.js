export const Types = ({ types }) => {
  return types && types?.map(item => {
    return (
      <div
        key={item.slot}
        className={`flex justify-center items-center px-4 py-2 capitalize rounded background-color-${item.type.name}`}
      >
        {item.type.name}
      </div>
    )
  })
}
