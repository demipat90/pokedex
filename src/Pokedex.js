import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './Pokedex.css';
import Header from './Components/layouts/Header';
import PokemonList from './Components/pokemon/PokemonList';
import PokemonDetails from './Components/pokemon/PokemonDetails';

class Pokedex extends Component {
  state = {
    species : [],
    details: {},
    loading : false
  }

  // search All pokemons
  searchAllPokemons = async () => {
    this.setState({ loading: true});
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=892`);
    this.setState({ species: res.data.results, loading: false});
  }

  // search pokemon details
  getPokemon = async (id) => {
    this.setState({ loading: true});
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(res.data, typeof res.data);
    this.setState({ details: res.data, loading: false});
  }

  render() {
    const { details, species, loading} = this.state;
    return (
      <Router>
        <div className="pokedex">
          <Header />
          <Switch>
            <Route exact path="/" render={ props => (
              <PokemonList
                { ...props }
                searchAllPokemons={this.searchAllPokemons}
                species={species}
                loading={loading}
              />
            )}/>
            <Route exact path="/pokemon/:id" render={ props => (
              <PokemonDetails
                { ...props }
                getPokemon={this.getPokemon}
                details={details}
                loading={loading}
              />
            )}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Pokedex;