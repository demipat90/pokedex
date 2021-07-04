import React, {Component} from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {

  componentDidMount() {
    this.props.searchAllPokemons();
  }

  render() {
    const { species } = this.props;
    return (
      <div className="pokemon--species--list">
        { species.map( pokemon => (
          <Pokemon key={pokemon.name} id={pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')} pokemon={pokemon}/>
        ))}
      </div>
    );
  }
}

export default PokemonList;
