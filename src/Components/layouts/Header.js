import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="panel">
        <span className="led indicator"></span>
        <div className="panel-top">
          <span className="led"></span>
          <span className="led"></span>
          <span className="led"></span>
        </div>
      </div>
      <div className="text-white text-5xl p-8 cursor-pointer" onClick={() => navigate("/")}>
        Pokédex
      </div>
    </>
  )
}
