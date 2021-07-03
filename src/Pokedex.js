import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './Pokedex.css';
import Header from './Components/layouts/Header';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';

class Pokedex extends Component {
  state = {
    species : [],
    data: {},
    loading : false
  }

  // search All pokemons
  searchAllPokemons = async () => {
    this.setState({ loading: true});
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=892`);
    this.setState({ species: res.data.results, loading: false});
  }

  // search All pokemons
  getPokemon = async (id) => {
    this.setState({ loading: true});
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(res.data, typeof res.data);
    this.setState({ data: res.data, loading: false});
  }

  render() {
    const { data, species, loading} = this.state;
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
                data={data}
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