import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/layouts/Header';
import { PokemonList } from './components/pokemon/PokemonList';
import { PokemonDetails } from './components/pokemon/PokemonDetails';

import './Pokedex.css';

export const Pokedex = () => {

  return (
    <BrowserRouter>
      <div className="pokedex">
        <Header />
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
