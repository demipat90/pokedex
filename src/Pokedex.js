import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/layouts/Header';
import { PokemonList } from './components/pokemon/PokemonList';
import { PokemonDetails } from './components/pokemon/PokemonDetails';
import { Images } from './components/pokemon/Images';
import { Abilities } from './components/pokemon/Abilities';
import { Types } from './components/pokemon/Types';

import './Pokedex.css';

export const Pokedex = () => {

  return (
    <BrowserRouter>
      <div className="pokedex">
        <Header />
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route exact path="/pokemon/:id" element={<PokemonDetails />}>
            <Route path="images" element={<Images />} />
            <Route path="abilities" element={<Abilities />} />
            <Route path="types" element={<Types />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
