import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { api, v2 } from './api';
import { Header } from './components/layouts/Header';
import { PokemonList } from './components/pokemon/PokemonList';
import { PokemonDetails } from './components/pokemon/PokemonDetails';

import './Pokedex.css';

export const Pokedex = () => {
  const [species, setSpecies] = useState([]);
  const [details, setDetails] = useState({});

  // get All pokemons
  const searchAllPokemons = async () => {
    await api.get(`/${v2}/pokemon/?limit=892`)
      .then((res) => setSpecies(res.data.results))
      .catch(error => {
        console.log(error);
      });
  }

  // get pokemon details
  const getPokemon = async (id) => {
    await api.get(`/${v2}/pokemon/${id}`)
      .then((res) => setDetails(res.data))
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <BrowserRouter>
      <div className="pokedex">
        <Header />
        <Routes>
          <Route exact path="/" element={
            <PokemonList
              searchAllPokemons={searchAllPokemons}
              species={species}
            />
          } />
          <Route exact path="/pokemon/:id" element={
            <PokemonDetails
              getPokemon={getPokemon}
              details={details}
            />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
