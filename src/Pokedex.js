import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/layouts/Header';
import { PokemonList } from './components/pokemon/PokemonList';
import { PokemonDetails } from './components/pokemon/PokemonDetails';
import { Info } from "./components/pokemon/Info";
import { Forms } from './components/pokemon/Forms';
import { Abilities } from './components/pokemon/Abilities';
import { Stats } from './components/pokemon/Stats';
import { Evolution } from './components/pokemon/Evolution';

import './Pokedex.css';

export const Pokedex = () => {

  return (
    <BrowserRouter>
      <div className="pokedex">
        <div className="pokedex__header">
          <Header />
        </div>
        <div className="pokedex__content">
          <div className="pokedex__content__wrapper">
            <img className="pokedex__bg" src="./images/ball.png" alt="pokeball" />
            <Routes>
              <Route exact path="/" element={<PokemonList />} />
              <Route exact path="/pokemon/:id" element={<PokemonDetails />}>
                <Route index element={<Info />} />
                <Route path="forms" element={<Forms />} />
                <Route path="abilities" element={<Abilities />} />
                <Route path="stats" element={<Stats />} />
                <Route path="evolution" element={<Evolution />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
