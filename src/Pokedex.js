import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './Pokedex.css';
import PokemonList from './Components/PokemonList';

class Pokedex extends Component {
  state = {
    species : [],
    loading : false
  }

  // search All pokemons
  searchAllPokemons = async text => {
    this.setState({ loading: true});
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=892`);
    this.setState({ species: res.data.results, loading: false});
  }

  render() {
    const { species, loading} = this.state;
    return (
      <Router>
        <div className='pokeapp'>
          <Switch>
            <Route exact path="/" render={ props => (
                <PokemonList
                  { ...props }
                  searchAllPokemons={this.searchAllPokemons}
                  species={species}
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