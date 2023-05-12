import { useOutletContext } from "react-router-dom";

export const Stats = () => {
  const { stats } = useOutletContext();

  return stats && stats.map((item, index) => {
    return (
      <div className="flex items-center gap-8 background-glass rounded-lg p-5 mb-8" key={index}>
        <h3 className="text-white capitalize">{item.stat.name}</h3>
        <p>{item.base_stat}%</p>
      </div>
    )
  })
}
